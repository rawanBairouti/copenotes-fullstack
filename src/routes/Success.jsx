import Header from '../Header.jsx';
import './Success.css';

export default function Success() {
    return (
        <>
            <Header />
            <div>
                <h3>
                    Your email is registered! We can't wait to brighten your day
                    with our notes!
                </h3>
                <div className='content'>
                    <a href='/register'>Register another email</a>
                    <a href='/'>Home</a>
                </div>
            </div>
        </>
    );
}
