import Button from 'react-bootstrap/Button';
import '../CSS/RegisterStyle.css'

function Register(){
    return(
        <div className="RegisterBox">
            <form className="RegisterForm">
                <div className="RegisterBoxTitle">
                    <h2>Create Your Profile</h2>
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
                            <input type="email" required="required" placeholder="humildan't@rtx3090.org"/>
                            <label>Email</label>
                        </div>
                        <div className="input">
                            <input type="password" required="required" placeholder="Password"/>
                            <label>Password</label>
                        </div>
                    </div>
                    <div className="SubButton">
                        <button type="button" className="btn btn-light">Submit</button>
                    </div>
                </div>
            </form> 
        </div>
    )
}

export default Register;