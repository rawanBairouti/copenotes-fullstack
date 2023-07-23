# CopeNotes

In order to be able to send emails from your Gmail account using this app, you might need to generate what's called an "app password" instead of using your actual password (unless you don't have 2-step verification enabled. In that case, you should be able to use your gmail password).

To generate an app password, go to google.com, click on your profile picture, and select "manage your Google account". From there, select "security" from the left menu, then click "2-step verification" on the page. Scroll down till you find "App Passwords", select that, and generate an app password.

Once you have an app password, create a `.env` file and fill it out according to the existing `.env.example` file.

Finally, in the command line, run `npm install`, then `npm start`, and the app will run, sending out an email every minute from the hardcoded messages to the hardcoded email. Once the the ten messages are sent, the app will keep running in case a new user registers, but no more emails will be sent until that happens.
