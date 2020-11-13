import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact-form.styles.css";

const ContactForm = () => {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">CONTACTO</h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a href="mailto:hygonzales1@misena.edu.co" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title="hygonzales1@misena.edu.co">
                  <i className="fas fa-envelope-square"></i> Correo
                </Button>
              </a>
            </div>

            <div className="m-2">
              <a href="https://github.com/xh4rz" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" title="Mi otros proyectos">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.youtube.com/channel/UCGqGGQdXODHEGzGw5pdo01w?view_as=subscriber" target="_blank" rel="noopener noreferrer">
                <Button id="youtube-btn" variant="outline-info" title="Vamos a ver videos juntos">
                <i className="fab fa-youtube"></i> Youtube
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://twitter.com/xh4rz" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-info" title="Los tweets son bienvenidos">
                  <i className="fab fa-twitter"></i> Twitter
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.facebook.com/xh4rz/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Harold Gonzalez">
                  <i className="fab fa-facebook-square"></i> Facebook
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.instagram.com/xh4rz/" target="_blank" rel="noopener noreferrer">
                <Button id="instagram-btn" variant="outline-primary" title="Sigue mi instagram">
                  <i className="fab fa-instagram-square"></i> Instagram
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default ContactForm;
