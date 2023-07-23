import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header.jsx';
import './SignIn.css';

export default function Register() {
    const [users, setUsers] = useState([{ name: '', email: '' }]);
    const [currentUser, setCurrentUser] = useState({ name: '', email: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    function validateEmail(email) {
        var regex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (users.find((user) => user.email === currentUser.email)) {
            setError('Email already registered.');
            setTimeout(() => {
                setError('');
            }, 3000);
        } else if (validateEmail(currentUser.email)) {
            setError('');
            setUsers([...users, currentUser]);
            fetch('http://127.0.0.1:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(currentUser),
            })
                .then(response => {
                    if (response.status === 200) navigate('/success');
                })
                .catch((error) => {
                    setError(error);
                });
        } else {
            setError('Please enter a valid email address.');
            setTimeout(() => {
                setError('');
            }, 3000);
        }
    };

    const handleChange = (event) => {
        setCurrentUser({
            ...currentUser,
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
                        value={currentUser.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Email:
                    <input
                        name='email'
                        type='email'
                        value={currentUser.email}
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
