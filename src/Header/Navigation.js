import AccountBoxIcon from '@material-ui/icons/AccountBox'
import DashBoard from '@material-ui/icons/Dashboard'
import '../CSS/Nav.css'
import { Navbar, Nav, Tab, Row, Col } from 'react-bootstrap'
function Navigation(props) {




    return (
       <Row>
           <Col>
            <Nav className = "nav flex-column nav-pills" v = 'v-pills-tab' role = 'tablist' >
                    <Nav.Link aria-current href='/Portal' className='' ><DashBoard fontSize='large' />Home</Nav.Link>
                    <Nav.Link aria-current href='/' className=''>Testing</Nav.Link>
                    <Nav.Link><AccountBoxIcon fontSize='large' className='' />User Profile</Nav.Link>
            </Nav>


           </Col>
       </Row>




        // //!working navbar but no tell of which page you're on 
        // <div className = 'wrapper'>
        // <Navbar bg="default" variant='dark' expand='lg' id = "sidebar">
        //     <Navbar.Toggle bg ="dark"aria-controls='responsive-navbar-nav' className="optionBox" />
        //     <Navbar.Collapse id="basic-navbar-nav" className="optionBox" id = 'Submenu'>
        //         <div className="navbar-style">
        //             <Nav variant="pills" className= "flex-column " style={{ paddingBottom: '20px' }}>
        //                 <Nav.Item>
        //                     <Nav.Link aria-current href='/Portal' className='' ><DashBoard fontSize='large' />Home</Nav.Link>
        //                 </Nav.Item>
        //                 <Nav.Item>
        //                     <Nav.Link aria-current href='/' className=''>Testing</Nav.Link>
        //                 </Nav.Item>
        //                 <Nav.Item>
        //                     <Nav.Link><AccountBoxIcon fontSize='large' className='' />User Profile</Nav.Link>
        //                 </Nav.Item>
        //             </Nav>
        //         </div>
        //     </Navbar.Collapse>
        // </Navbar>
        // </div>
    );
}

export default Navigation