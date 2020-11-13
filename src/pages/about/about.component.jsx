import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/profile.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about" >
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">PERFIL</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={Profile}
                  roundedCircle
                  fluid
                />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hola! yo soy{" "}
                <strong>&nbsp;Harold Yesid Gonzalez Mancipe</strong>
                <br />
                Un programador apasionado por las tecnologías, nacido en Bogotá
                Colombia.
                <br />
                A finales de 2019 completé con éxito el Tecnólogo en Análisis y
                Desarrollo de Sistemas de Información. Al trabajar con los
                clientes, mi objetivo siempre es brindarles una experiencia
                increíble con el mejor nivel de calidad y servicio.
                <br />
                Egresado del SENA responsable en el estudio de los problemas y las necesidades del usuario, presentes en la organización para determinar en qué medida puede el software actuar conjuntamente para resolver los problemas del modo más adecuado, tanto para mejorar la generación de sistemas de información, para la sistematización o automatización de procesos.
                <br />
                Me encanta aprender sobre nuevas tecnologías, qué problemas
                están resolviendo y cómo puedo usarlas para crear productos
                mejores y escalables.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Hablemos
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1sbOuRXELGz0MjIE5k4fG9tqQBDId0fD4/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        Hoja De Vida
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/xh4rz"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/harold-gonzalez-0546371a7/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
