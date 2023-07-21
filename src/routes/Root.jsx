import './Root.css';
import Header from '../Header';

export default function App() {
    return (
        <>
            <Header />
            <div className='content'>
                <a href='/sign-in'>Admin? Click to sign in</a>
                <a href='/register'>New User? Click to register</a>
            </div>
        </>
    );
}


