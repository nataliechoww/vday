import { useState } from 'react';
import './styles/signup.css';
import cat from './images/cat.jpeg'

function Signup() {
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault(); // Prevent default form submission
        
        try {
            const response = await fetch('http://vday-backend.vercel.app:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password }),
            });
            
            if (response.ok) { // Check if response status is within 200-299 range
                const data = await response.json();
                if (data === "login success") {
                    window.location.href = '/bemyvalentine';
                } else {
                    setErrorMessage(data.error || 'An error occurred while signing up');
                }
            } else {
                setErrorMessage('An error occurred while signing up');
            }
        } catch (error) {
            console.error('Error signing up:', error);
            setErrorMessage('An error occurred while signing up');
        }
    };
    

    return (
        <div className="signup-container">
            <img style={{width:'200px', height: '200px'}} src={cat} alt="Cat" />
            <h1>happy valentines bb. password is a nickname you call me:)</h1>
            <form onSubmit={handleSignup}>
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
}

export default Signup;
