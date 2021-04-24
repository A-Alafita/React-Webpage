import AccountBoxIcon from '@material-ui/icons/AccountBox'
import '../CSS/Nav.css'
import { Navbar, Nav} from 'react-bootstrap'
const Navigation = () => {
    return (
        <Navbar bg="dark" variant='dark' expand='lg'>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id="basic-navbar-nav" className="navbarID">
                <div className = "navbar-style">
                <Nav className="mr-auto flex-column options">
                    <Nav.Link aria-current href='/Portal'>Home</Nav.Link>
                    <Nav.Link aria-current href='/'>Testing</Nav.Link>
                    <Nav.Link style = {{color:"white", paddingLeft:'25px'}}><AccountBoxIcon fontSize = 'large' style = {{color:'white', paddingLeft:'10px'}}/>User Profile</Nav.Link>
                </Nav>
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation