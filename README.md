# HappyNotes

Welcome to HappyNotes! This application is designed to send random happy messages to registered users via email. The purpose is to bring a little bit of joy and positivity into people's day.

## Features

- User registration: New users can register their email to start receiving happy messages.
- Admin sign-in: An administrator can sign in with a specific email and manage the messages sent to users. To sign in as an admin, use the same gmail account you entered in the `.env` file (more on that below).
- Message management: The administrator can add new messages that will be randomly sent to users.
- Email sending: The application automatically sends a random message to all active users every minute.

## How to Run the App

To run this app, please ensure Node.js and npm are installed on your machine, then follow the steps below:

1. Clone the repository to your local machine and change the directory to the local repository.
2. Install the necessary dependencies with the command: `npm install`.
3. Create a `.env` file at the root of the project based on the `.env.example` provided. Replace the placeholders with your Gmail account and password if you don't have 2-step verification enabled, or an app password otherwise. See below for more information on how to generate an app password.
4. Start the server and client with the command: `npm start`. If the client page doesn't launch automatically, please check the console for the address it's running on. Copy paste it into your browser, or press CMD (CTRL for windows) and click on the address in the console.

## How to Generate an App Password

To generate an app password, follow the steps below: 

1. Go to www.google.com and sign in if you're not already.
2. Click on your profile.
3. Select "Manage your Google Account".
4. From the menu on the left side, select "Security".
5. On the Security page, click "2-Step Verification".
6. Scroll down until you find "App Passwords" and select it.
7. Generate an app password following the instructions on the page and copy it to the .env file.


## Note

This app uses NodeMailer to send emails, and CORS to handle cross-origin resource sharing. It also uses Express for routing and to create the server, and React/React Router for the frontend.
