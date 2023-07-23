import Header from '../Header.jsx';

export default function Success() {
    return (
        <>
            <Header />
            <div className='content'>
                <h3>
                    Your email is registered! We can't wait to brighten your day
                    with our notes!
                </h3>
                <a href='/register'>Register another email</a>
                <a href='/'>Home</a>
            </div>
        </>
    );
}
