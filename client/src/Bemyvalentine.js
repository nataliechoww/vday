import { useState } from 'react';
import './styles/bemyvalentine.css';
import valentinescat from './images/valentinescat.jpeg'
// import valentinescat from './images/valentinescat.jpeg'

function Bemyvalentine(){
    const [buttonStyle, setButtonStyle] = useState({
        position: 'absolute',
        top: '',
        left: ''
    });

    const tryAgain = () => {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const randomLeft = Math.random() * (screenWidth - 100); // Adjust 100 according to the button's width
        const randomTop = Math.random() * (screenHeight - 50); // Adjust 50 according to the button's height

        setButtonStyle({
            ...buttonStyle,
            top: randomTop,
            left: randomLeft
        });
    };

    return(
        <div className="bemyvalentine">  
            <img src={valentinescat} alt="valentinescat" style={{height: '200px', width: '200px', margin: 'auto'}}></img>
            <h1> Will you be my valentine? </h1>
            <div className = "buttons">
                <button className="yesButton" onClick={() => {window.location.href='/Ideas'}}>Yes</button>
                <button className="noButton" style={buttonStyle} onMouseEnter={tryAgain}>No</button>
            </div>
        </div>
    )
}

export default Bemyvalentine;
