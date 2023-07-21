import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header.jsx';
import './SignIn.css';

export default function Register() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
	const navigate = useNavigate();
	
	function validateEmail(email) {
        var regex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateEmail(email)) {
            setError('');
            navigate('/success');
        } else {
            setError('Please enter a valid email address.');
        }
    };

    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <>
            <Header />
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                        type='email'
                        value={email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type='submit'>Register</button>
                {error && <h4 className='error'>{error}</h4>}
            </form>
        </>
    );
}
