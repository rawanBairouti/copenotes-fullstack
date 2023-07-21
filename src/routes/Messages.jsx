import { useState } from 'react';
import Header from '../Header';
import './messages.css';

export default function Messages() {
	const [message, setMessage] = useState([`"Hello"`, `"hi"`]);
	const [newMessage, setNewMessage] = useState('')
	const [success, setSuccess] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
        setMessage([`"${newMessage}"`, ...message]);
		setSuccess('Message added!');
		setNewMessage('');
	};

    const handleChange = (event) => {
        setNewMessage(event.target.value);
	};
	
	const messageArray = message.map(msg => <h3>{msg}</h3>)

    return (
        <>
            <Header />
            <div>
				<h2>Current Messages:</h2>
				<div className='messages'>
					{messageArray}
				</div>
                <form onSubmit={handleSubmit}>
                    <input
						type='text'
						value={newMessage}
                        onChange={handleChange}
                        required
                    />
					<button type='submit'>Add Message</button>
                    {success && <h4>{success}</h4>}
                </form>
            </div>
        </>
    );
}
