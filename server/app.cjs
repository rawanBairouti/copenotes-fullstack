const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// User storage
const users = {};
const active = 'Active';
const completed = 'Completed';

// Hardcoded messages
const messages = [
    'Good morning sunshine, I hope you have an awesome day!',
    'You are loved more than you know.',
    'Embrace each day with a smile.',
    "Believe in yourself; you're capable of amazing things.",
    'You have the power to make a difference.',
    'Dream big and let your spirit soar.',
    'Kindness is a language everyone understands.',
    'The world is brighter with you in it.',
    'You have a heart full of endless possibilities.',
    'Find joy in the little things and let your happiness grow.',
];

// Setup email transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASS,
    },
});

// API endpoint to register new users
app.post('/register', (req, res) => {
    const email = req.body.email;

    function validateEmail(email) {
        var regex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    }

    if (!email || validateEmail(email) === false) {
        return res.status(400).json({ error: 'A valid email is required.' });
    } else if (Object.keys(users).find(userEmail => userEmail === email)) {
        return res.status(400).json({ error: 'Email already registred.' });
    }


    // Initialize user with an empty array to store received messages and active status
    users[email] = {
        name: req.body.name,
        messages: [],
        status: active,
    };

    return res.status(200).json({ message: 'New email successfully registered.' });
});

// API endpoint to add new messages
app.post('/new-message', (req, res) => {
    const message = req.body.message;
    if (!message) {
        return res.status(400).json({ error: 'Message is required.' });
    }

    // add new message to our existing array
    messages.push(message);

    //update status so new message is sent to all users
    for (const email in users) {
        users[email].status = active;
    }

    return res.status(200).json({ message: 'New message added successfully.' });
});

// API endpoint to get all messages
app.get('/messages', (req, res) => {
    return res.json({ messages: messages });
});

// Scheduled task to send emails every minute
setInterval(async () => {
        for (const email in users) {
            if (users[email].status === completed) continue;

            const receivedMessages = users[email].messages;
            const remainingMessages = messages.filter(
                (msg) => !receivedMessages.includes(msg)
            );

            // If user has received all messages, set status to completed so they'd no longer receive messages
            if (remainingMessages.length === 0) {
                users[email].status = completed;
                continue;
            }

            // Pick a random message and send it
            const index = Math.floor(Math.random() * remainingMessages.length);
            const randomMessage = remainingMessages[index];
            receivedMessages.push(randomMessage);

            try {
                console.log('Sending emails...');
                await transporter.sendMail({
                    from: process.env.EMAIL,
                    to: email,
                    subject: 'Happy (e)Mail!',
                    text: `Hello ${users[email].name}, ${randomMessage}`,
                });
                console.log(`Email sent to ${email}`);
            } catch (error) {
                console.log(`Failed to send email to ${email}: ${error}`);
            }
        }
    }, 60 * 1000);

app.listen(3000, () => console.log('App is running on http://localhost:3000'));
