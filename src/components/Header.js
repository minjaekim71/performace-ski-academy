import './Header.css';
import logo from '../images/logo.png';

function Header() {
    return (
        <header>
            <img className='logo' src={logo} alt={''}/>
            <div className='text'>
                <h1 className='title'>퍼포먼스 스키 아카데미</h1>
                <h2 className='subtitle'>In Bears Town</h2>
            </div>
        </header>
    );
}

export default Header;