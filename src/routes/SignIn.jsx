import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header.jsx';
import './SignIn.css';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
		if (email === import.meta.env.VITE_APP_EMAIL) {
            setError('');
            navigate('/admin');
        } else {
            setError('Please enter a valid admin email address.');
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
                <button type='submit'>Submit</button>
                {error && <h4 className='error'>{error}</h4>}
            </form>
        </>
    );
}
