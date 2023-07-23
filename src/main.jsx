import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root.jsx';
import SignIn from './routes/SignIn.jsx';
import Admin from './routes/Admin.jsx';
import Register from './routes/Register.jsx';
import Success from './routes/Success.jsx';
import './index.css';
import Messages from './routes/Messages.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
    },
    {
        path: '/sign-in',
        element: <SignIn />,
    },
    {
        path: '/admin',
        element: <Admin />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/success',
        element: <Success />
    },
    {
        path: '/messages',
        element: <Messages />
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
