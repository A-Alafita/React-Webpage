import AccountBoxIcon from '@material-ui/icons/AccountBox'
import { Navbar, Nav} from 'react-bootstrap'
const Navigation = () => {
    return (
        <Navbar bg="dark" variant='dark' expand='lg'>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id="basic-navbar-nav" className="navbarID">
                <div className = "navbar-style">
                <Nav className="mr-auto flex-column">
                    <Nav.Link aria-current href='/Portal'>Home</Nav.Link>
                    <Nav.Link aria-current href='/'>Testing</Nav.Link>
                <div style={{ position: 'absolute', right: '20px', top:'5px' }}>
                    <Nav.Link>
                        <AccountBoxIcon fontSize = 'large' style = {{color:'white'}}/>
                    </Nav.Link>
                </div>
                </Nav>
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation