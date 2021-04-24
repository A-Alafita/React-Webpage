import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Start.css'
import Header from '../Header/Header'

function Portal() {
    return (
        <div>
            <div className ='sideNav'>
            <Header />
            </div>
            <div className='welcome-box'>
                <p>Welcome</p>
            </div>
        </div>
    );
}

export default Portal;