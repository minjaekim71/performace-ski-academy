import './Profile.css';

function Profile({image, name, position, sbak, ksia}) {
    return (
        <div className="profile">
            <img className="image" src={image} alt=""/>
            <div className="levels">
                <span className="sbak">SBAK</span>
                <span className="sbak-level">{sbak}</span>
                <span className="ksia">KSIA</span>
                <span className="ksia-level">{ksia}</span>
            </div>
            <div className="title">
                <span className="name">{name}</span>
                <span className="position">{position}</span>
            </div>
        </div>
    );
}

export default Profile;
