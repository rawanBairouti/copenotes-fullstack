import CopeNotesLogo from '/CopeNotes.png';

export default function Header() {
    return (
        <div>
            <a href='/'>
                <img
                    src={CopeNotesLogo}
                    className='logo'
                    alt='CopeNotes logo'
                />
            </a>
        </div>
    );
}
