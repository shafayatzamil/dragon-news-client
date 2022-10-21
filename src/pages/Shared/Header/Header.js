import React, { useContext } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsUpload } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";


const Header = () => {
  const { user ,logOut} = useContext(AuthContext);
  console.log(user);
  const handleLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>{})
  }
  return (
    <Navbar
      collapseOnSelect
      className="mb-4"
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">Dragon-news</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="#features">All news</Nav.Link>
            <Nav.Link to="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item to="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item to="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item to="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <>
              {
                user?.uid ?
                <>
                <span>{user?.display}</span>
                <button onClick={handleLogOut}>LogOut</button>
                </>:
                <>
                <Link to={'/login'}>Login</Link>
                <Link to={'/register'}>Register</Link>
                </>
              }
            
            </>
            <Nav.Link eventKey={2} to="#memes">
              {user?.photoURL?
              <Image src = {user?.photoURL} referrerPolicy='no-referrer' style={{height:'40px'}} roundedCircle></Image>
              :<BsUpload></BsUpload>
              }
            </Nav.Link>
          </Nav>
          <div className="d-lg-none">
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
