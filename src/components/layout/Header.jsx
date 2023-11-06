import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import GitHubIcon from '@mui/icons-material/GitHub';
import {Link} from 'react-router-dom'

function Header() {
  return (
    <Navbar expand="md" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className='brand'><GitHubIcon className='icon'/> Github Finder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            <Nav.Link as={Link} to="/about" >About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;