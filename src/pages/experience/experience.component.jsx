import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/img/experience/Logo_Tigo.svg";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCIA</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <Card.Img
                  variant="top"
                  className="img-resize"
                  src={L_ACCENTURE}
                  alt="Accenture logo"
                />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">
                    Tecnólogo en Análisis y Desarrollo de Sistemas Información
                  </Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">
                      Aprendiz Digital
                    </strong>
                    <br />
                    <strong>Tecnologías:</strong> Oracle, Google Analytics, JavaScript
                    <br />
                    <strong>Duration:</strong> Abril - Octubre / 2019
                    <br />
                    <strong> Descripción </strong>
                    <ul className="text-left">
                      <li>
                        <strong>Desarrollando</strong> múltiples funciones con
                        opción de personalización en toda la aplicación web.
                      </li>
                      <li>
                        <strong>Realización</strong> de informes y transacciones
                        digitales, usando las herramientas analíticas como
                        mixpanel, Excel y Oracle SQL gestor de base de datos,
                        generando y actualizando reportes diariamente para la
                        medición del usuario final y procedimientos requeridos
                        por dicha compañía.
                      </li>
                      <li>
                        <strong>Previsto</strong> mantenimiento de la aplicación
                        mientras trabajo como "Soporte de producción".
                      </li>
                      <li>
                        <strong>Programando</strong> Operaciones CRUD en
                        múltiples bases de datos para cargar / eliminar datos de
                        acuerdo con los requisitos comerciales.
                      </li>
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
