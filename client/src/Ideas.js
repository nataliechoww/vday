import { useState } from 'react';
import './styles/ideas.css';
import WeBareBears from './images/WeBareBears.jpeg'
import sanrio from './images/sanrio.jpeg'
import favoriteperson from './images/favoriteperson.jpeg'

function Ideas() {
    const [results, setResults] = useState('');
    const [specificResults, setSpecificResults] = useState('');
    const [finalImages, setFinalImages] = useState('')

    const makeResultsAppear = async (event) => {
        event.preventDefault();

        const activity = event.target.activity.value;
        const game = event.target.game.value;
        const food = event.target.food.value;

        try {
            const response = await fetch(`vday-backend.vercel.app:3001/activity/${activity}`);
            const data = await response.json();
            const options = data.map((movie, index) => (
                <option key={index} value={movie.name}>{movie.name}</option>
            ));
            setResults(
                <>
                    <h2> Now, choose our specific {activity}</h2>
                    <form onSubmit={(e) => getFinalDate(e, activity, game, food)}>
                    <select name={`${activity}`} required>
                        <option value=""> Choose our {activity}</option>
                        {options}
                    </select>
                    <button className="enter-button" type="submit">Enter</button>
                    </form>
                </>
            );
        } catch (error) {
            console.log('Error fetching activity', error);
        }
    };

    const getFinalDate = async (event, activity, game, food) => {
        event.preventDefault();

        const finalActivity = event.target[`${activity}`].value;
        const finalGame = game;
        const finalFood = food;

        try {
            const response = await fetch(`vday-backend.vercel.app:3001/activity/description?name=${(finalActivity)}`);

            if (!response.ok) {
                throw new Error('Failed to fetch movie description');
            }

            const description = await response.json();
            setSpecificResults(
                <>
                    <h2> Our Final Date :)</h2>
                    <div style={{backgroundColor: 'white', borderRadius: '20px', width: '50%', margin: 'auto', padding: '30px', fontFamily: 'Poppins'}}>
                    <p>Final {activity}: {finalActivity}</p>
                    <p>Description of {activity}: {description}</p>
                    <p>Final Game: {finalGame}</p>
                    <p>Final Food: {finalFood}</p>
                    </div>
                </>
            );
            setFinalImages(
                <>
                    <img style={{width: '200px', height: '200px', margin: '10px'}} src={WeBareBears}></img>
                    <img style={{width: '200px', height: '200px', margin: '10px'}} src={sanrio}></img>
                    <img style={{width: '200px', height: '200px', margin: '10px'}} src={favoriteperson}></img>
                </>
            )
        } catch (error) {
            console.error('Error fetching movie description:', error);
        }

    };

    return (
        <div className="container">
            <h1> You have made the right choice. Now choose our date tonight! </h1>
            <form onSubmit={makeResultsAppear}>
                <select name="activity" required>
                    <option value="">Activity</option>
                    <option value="movie">New Movie</option>
                    <option value="Show">New Show</option>
                </select>
                <select name="game" required>
                    <option value="">Game</option>
                    <option value="Overcooked">Overcooked</option>
                    <option value="Party Animals">Party Animals</option>
                    <option value="It Takes Two">It Takes Two</option>
                    <option value="A Way Out">A Way Out</option>
                    <option value="NYT games">NYT Games</option>
                </select>
                <select name="food" required>
                    <option value="">Food</option>
                    <option value="Doordash">Doordash</option>
                    <option value="Dining Hall">Dining Hall</option>
                    <option value="Dining Hall">Already 8!</option>
                </select>
                <button className="enter-button" type="submit">Enter</button>
            </form>
            <div>{results}</div>
            <div style={{ padding: '10px', marginTop: '20px' }}>
                {specificResults}
            </div>
            <div className="finalImages">
                {finalImages}
            </div>
        </div>
    );
}

export default Ideas;
