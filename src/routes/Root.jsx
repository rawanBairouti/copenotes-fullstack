import './Root.css';
import Header from '../Header';

function App() {
    return (
        <>
            <Header />
            <div className='content'>
                <a href='/sign-in'>Admin? Click to sign in</a>
                <a href='/new-user'>New User? Click to register</a>
            </div>
        </>
    );
}

export default App;
