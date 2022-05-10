import Profile from '../profile/Profile';

function ProfileRow({profiles}) {
    return (
        <div>
            {profiles.map(profile => <Profile {...profile} key={profile.name} />)}
        </div>
    );
}

export default ProfileRow;
