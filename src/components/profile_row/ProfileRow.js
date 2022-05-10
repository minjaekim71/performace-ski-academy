import './ProfileRow.css';
import Profile from '../profile/Profile';

function ProfileRow({profiles}) {
    return (
        <div className="profile-row">
            {profiles.map(profile => <Profile {...profile} key={profile.name}/>)}
            <div className="description">
                <span className="sbak">SBAK</span>
                <span className="sbak-kr">(한국 스키장 경영 협회 티칭 자격)</span>과
                <span className="ksia">KSIA</span>
                <span className="ksia-kr">(대한 스키 지도자 연맹 레벨)</span>은
                <span className="authorized">검증받은 스키 지도자</span>들에게 부여되는 등급입니다.
            </div>
        </div>
    );
}

export default ProfileRow;
