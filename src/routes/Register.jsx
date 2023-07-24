import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header.jsx';
import './SignIn.css';

export default function Register() {
    const [newUser, setNewUser] = useState({ name: '', email: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    function validateEmail(email) {
        var regex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateEmail(newUser.email)) {
            setError('');
            fetch('http://127.0.0.1:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            })
                .then(response => {
                    if (response.status === 200) navigate('/success');
                    else {
                        return response.json().then(result => setError(result.error))
                    }
                })
                .catch((error) => {
                    setError(error.message);
                });
        } else {
            setError('Please enter a valid email address.');
            setTimeout(() => {
                setError('');
            }, 7000);
        }
    };

    const handleChange = (event) => {
        setNewUser({
            ...newUser,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <>
            <Header />
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        name='name'
                        type='text'
                        value={newUser.name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                        name='email'
                        type='email'
                        value={newUser.email}
                        onChange={handleChange}
                    />
                </label>
                <button type='submit'>Register</button>
                {error && <h4 className='error'>{error}</h4>}
            </form>
        </>
    );
}
