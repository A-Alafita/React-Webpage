import AccountBoxIcon from '@material-ui/icons/AccountBox'
import DashBoard from '@material-ui/icons/Dashboard'
import '../CSS/Nav.css'
import { Navbar, Nav, Tab, Row, Col } from 'react-bootstrap'
const Navigation = () => {
    return (
        <div className='sideNav'>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col lg={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link aria-current href='/Portal' className='' ><DashBoard fontSize='large' />Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link aria-current href='/' className=''>Testing</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link><AccountBoxIcon fontSize='large' className='' />User Profile</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col lg={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
        //!working navbar but no tell of which page you're on 
        // <Navbar bg="default" variant='dark' expand='lg' className='sideNav'>
        //     <Navbar.Toggle aria-controls='responsive-navbar-nav' className="optionBox" />
        //     <Navbar.Collapse id="basic-navbar-nav" className="optionBox">
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
    );
}

export default Navigation