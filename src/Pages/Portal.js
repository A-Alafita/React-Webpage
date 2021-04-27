// import { Navigation } from '@material-ui/icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Start.css'
import Navigation from '../Header/Navigation'
function Portal() {
    return (
        <div>
            <Navigation tab = '1' />
            <div className='welcome-box'>
                <p>Welcome</p>
            </div>
        </div>
    );
}

export default Portal;