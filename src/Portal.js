import 'bootstrap/dist/css/bootstrap.min.css';
import './Start.css'
// import Navbar from 'react-bootstrap/Navbar'
// import Button from 'react-bootstrap/Button'
// import {Navbar, Nav, Container} from 'react-bootstrap'
// import {BrowserRouter as Router} from 'react-router-dom';
import { Route, Switch } from 'react-router-dom'
import Navigation from './Navigation'

function Portal() {
    return (
        <div>
            <Navigation />,
            <div className = 'welcome-box'>
                <p>Welcome</p>
            </div>
        </div>
    );
}



export default Portal;