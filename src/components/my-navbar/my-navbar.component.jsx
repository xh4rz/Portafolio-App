import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/icons/xh4rz_logo_final_03.png";
import "./my-navbar.styles.css";

const MyNavbar = () => {
  return (
    <div>
      <Navbar
        fixed="top"
        variant="dark"
        expand="md"
        className="animate-navbar nav-theme justify-content-between"
      >
        <div>
          <Navbar.Brand href="#home">
            <img className="logo" src={Logo} alt="mi navbar" />
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#about">Perfil</Nav.Link>
              <Nav.Link href="#skills">Habilidades</Nav.Link>
              <Nav.Link href="#experience">Experiencia</Nav.Link>
              <Nav.Link href="#contact">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default MyNavbar;

