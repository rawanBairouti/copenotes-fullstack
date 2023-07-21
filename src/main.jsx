import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root.jsx';
import SignIn from './routes/SignIn.jsx';
import './index.css';
import Admin from './routes/Admin.jsx';

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
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
