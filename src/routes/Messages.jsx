import { useState, useEffect } from 'react';
import Header from '../Header';
import './Messages.css';

export default function Messages() {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [success, setSuccess] = useState('');
	const [error, setError] = useState('');
	
	useEffect(() => {
        fetch('http://127.0.0.1:3000/messages')
            .then((response) => response.json())
            .then((data) => setMessages(data.messages))
            .catch((error) => console.error('Error:', error));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessages([...messages, newMessage]);
        fetch('http://127.0.0.1:3000/new-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
			body: JSON.stringify({ message: newMessage }),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => {
                setError(error.message);
                setTimeout(() => setError(''), 3000);
            });
        setSuccess('Message added!');
        setNewMessage('');
        setTimeout(() => setSuccess(''), 3000);
    };

    const handleChange = (event) => {
        setNewMessage(event.target.value);
    };

    const messagesArray = messages.map((msg) => <h3 key={msg}>{msg}</h3>);

    return (
        <>
            <Header />
            <div>
                <h2>Current Messages:</h2>
                <div className='messages'>{messagesArray}</div>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        value={newMessage}
                        onChange={handleChange}
                        required
                    />
                    <button type='submit'>Add Message</button>
                    {success && <h4>{success}</h4>}
                    {error && <h4>{error}</h4>}
                </form>
            </div>
        </>
    );
}
