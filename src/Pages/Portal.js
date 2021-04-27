// import { Navigation } from '@material-ui/icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Start.css'
import Navigation from '../Header/Navigation';
import Tasks from '../Widgets/Tasks';
function Portal() {
    return (
    <div className = "tasks">
        <Tasks/>
        <div className = "parent">
            <div className = "tasks">
            </div>
            <Navigation tab = '1' />
            <div className='welcome-box'>
            </div>
        </div>
    </div>

    );
}

export default Portal;