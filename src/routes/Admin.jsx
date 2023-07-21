import Header from '../Header';
import './Root.css';

export default function Admin() {
    return (
        <>
            <Header />
            <div className='content'>
                <a href='/messages'>Manage Message</a>
                <a href='/emails'>Manage Emails</a>
            </div>
        </>
    );
}
