import Button from 'react-bootstrap/Button';
import '../CSS/UserProfile.css';
import UserProfileBox from './UserProfileBox';
import Navigation from "../Header/Navigation";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>

function UserProfile(){
    return(
        <div>
            <div className ='sideNav'>
                <Navigation tab = '2'/>
            </div>
            <div >
                <h1>User page</h1>
            </div>
            <div className="UserFrom">
                <UserProfileBox />
            </div>
        </div>
    )
}

export default UserProfile;