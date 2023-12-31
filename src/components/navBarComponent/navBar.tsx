import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar style={{backgroundColor: "#2F084E",}} expand="lg" className='py-3'>
            <Navbar.Brand href="/" className='ms-2 text-white'><strong>Guardians of the Globe</strong></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/heroes" className='text-white'>Heroes</Nav.Link>
                    <Nav.Link href="/villains" className='text-white'>Villains</Nav.Link>
                    <Nav.Link href="/matches" className='text-white'>Matches</Nav.Link>
                    <Nav.Link href="/sponsors" className='text-white'>Sponsors</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
