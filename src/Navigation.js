import { Navbar, Nav, Container } from 'react-bootstrap'
const Navigation = () => {
    return (
        <Navbar collapsOnSelect fized='top' expands='sm' bg="dark" variant='dark'>
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Collapse id = 'responsive-navbar-nav'> 
                        <Nav>
                            <Nav.Link href='/Portal'>Home</Nav.Link>
                            <Nav.Link href='/App'>Testing</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation