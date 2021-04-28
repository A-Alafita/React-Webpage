import Button from 'react-bootstrap/Button';
import '../CSS/UserProfile.css';
import InputLabel from './InputLabel.js';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>

function UserProfileBox(){
    var arr = ["First Name","Second Name","City","Country","Postal Code"];
    return(
        <div>
            <form className="UserForm">
                <div className="UserBoxTitle">
                    <h2>Edit Profile</h2>
                    <p>Complete your profile</p>
                </div>
                <div>
                    <div className="OutDiv">
                        {arr.map((val) => {
                            return (<InputLabel value={val}/>)
                        })}
                    </div>
                    <div>
                        <button type="button" class="btn btn-light">Update</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default UserProfileBox;