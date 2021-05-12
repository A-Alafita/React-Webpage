import Button from 'react-bootstrap/Button';
import '../CSS/UserProfile.css';
import InputLabel from './InputLabel.js';

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
                    <div className="SubButton">
                        <button type="button" className="btn btn-light">Update</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default UserProfileBox;