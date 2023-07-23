import Header from '../Header';
import './Root.css';

export default function Admin() {
    return (
        <>
            <Header />
            <div className='content'>
                <a href='/messages'>Manage Messages</a>
            </div>
        </>
    );
}
