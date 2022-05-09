import './Header.css';
import logo from '../../images/logo.png';
import Menu from '../menu/Menu';

function Header() {
    return (
        <header>
            <a href="/">
                <img className="logo" src={logo} alt={''}/>
                <div className="text">
                    <h1 className="title">퍼포먼스 스키 아카데미</h1>
                    <h2 className="subtitle">In Bears Town</h2>
                </div>
            </a>
            <Menu/>
        </header>
    );
}

export default Header;