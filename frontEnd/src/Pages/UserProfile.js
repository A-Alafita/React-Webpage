import Button from 'react-bootstrap/Button';
import '../CSS/UserProfile.css';
import UserProfileBox from './UserProfileBox';
import Navigation from "../Header/Navigation";

function UserProfile() {
    return (
        <div>
            <Navigation tab='2' />
            <div className="UserFrom">
                <UserProfileBox />
            </div>
        </div>
    )
}

export default UserProfile;