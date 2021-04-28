import Button from 'react-bootstrap/Button';
import '../CSS/UserProfile.css';


<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>

function UserProfileBox(){
    return(
        <div>
            <form className="UserForm">
                <div className="UserBoxTitle">
                    <h2>Edit Profile</h2>
                    <p>Complete your profile</p>
                </div>
                <div>
                    
                    <div className="OutDiv">
                        <div className="input">
                            <input type="text" required="required" placeholder="First Name"/>
                            <label>First Name</label>
                        </div>
                        <div className="input">
                            <input type="text" required="required" placeholder="Second Name"/>
                            <label>Second Name</label>
                        </div>
                        <div className="input">
                            <input type="text" required="required" placeholder="City"/>
                            <label>City</label>
                        </div>
                        <div className="input">
                            <input type="text" required="required" placeholder="Country"/>
                            <label>Country</label>
                        </div>
                        <div className="input">
                            <input type="text" required="required" placeholder="Postal Code"/>
                            <label>Postal Code</label>
                        </div>
                    </div>
                    <div>
                        <button type="button" class="btn btn-light">Update</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default UserProfileBox;