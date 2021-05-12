// import { Navigation } from '@material-ui/icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Start.css'
import Navigation from '../Header/Navigation';
import Tasks from '../Widgets/Tasks';
function Portal() {
    return (
        <div className='welcome-box'>
            <Navigation tab='1' />
            <div className="contanier">
                <div> <Tasks /> </div>
            </div>
        </div>
    );
}

export default Portal;