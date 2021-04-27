import AccountBoxIcon from '@material-ui/icons/AccountBox'
import DashBoard from '@material-ui/icons/Dashboard'
import '../CSS/Nav.css'
import { Navbar, Nav, } from 'react-bootstrap'
function Navigation(props) {
    return (
        <div className='wrapper'>
            <Navbar bg="default" variant='dark' expand='lg' className="sideNav">
                <Navbar.Toggle bg="dark" aria-controls='responsive-navbar-nav' className="optionBox" />
                <Navbar.Collapse id="basic-navbar-nav" className="optionBox" id='Submenu'>
                    <div className="navbar-style">
                        <Nav variant="pills" activeKey={props.tab} className='flex-column'>
                            <Nav.Item>
                                <Nav.Link aria-current href='/Portal' eventKey="1" className="tab"><DashBoard fontSize='large' />   Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link aria-current href='/UserProfile' eventKey="4" className='tab'> <AccountBoxIcon fontSize='large' eventKey='5'/> User Profile</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link aria-current href='/' eventKey="2" className='tab'>Testing</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link aria-current href='/' eventKey="3" className='tab'>Testing</Nav.Link>
                            </Nav.Item>

                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation