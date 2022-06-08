import './Promotion.css';
import link1 from './link1.jpg';
import link2 from './link2.jpg';

function Promotion() {
    return (
        <div className="promotion">
            <img className="image" src={link1} alt="" />
            <img className="image" src={link2} alt="" />
            
        </div>
    );
}

export default Promotion;