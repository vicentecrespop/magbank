import React from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faMobileScreenButton,
    faMobileButton,
    faGlobe,
    faShieldHalved
} from '@fortawesome/free-solid-svg-icons'
import './Institutional.scss';

const Institutional = ({ onClick }) => (
    <Container fluid className="institutional">
        <Container fluid className="w-75">
            <div className="text-light institutional__content float-end">
                <h2 className="pb-4 pt-5">Já nascemos digital</h2>
                <p className="pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu 
                    vel arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper, varius 
                    ligula sed, auctor augue. Maecenas et porta magna. Nulla mattis tortor vitae metus
                    vestibulum scelerisque. Ut mollis a nisl vel suscipit. Curabitur scelerisque placerat
                    ultrices. Proin purus ante, congue vel arcu ac, porta condimentum mauris. Maecenas
                    massa orci, fringilla eget fermentum nec, dignissim nec diam.
                </p>
                <Row className="mb-4">
                    <Col xs={2} md={1} className="d-flex justify-content-center">
                        <FontAwesomeIcon icon={faMobileScreenButton} size='2x' color="#fff"/>
                    </Col>
                    <Col xs={10} md={11}>
                        Sem fila e sem burocracia
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col xs={2} md={1} className="d-flex justify-content-center">
                        <FontAwesomeIcon icon={faMobileButton} size='2x' color="#fff"/>
                    </Col>
                    <Col xs={10} md={11}>
                        Simples e prático
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col xs={2} md={1} className="d-flex justify-content-center">
                        <FontAwesomeIcon icon={faGlobe} size='2x' color="#fff"/>
                    </Col>
                    <Col xs={10} md={11}>
                        Abertura de conta 100% online
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col xs={2} md={1} className="d-flex justify-content-center">
                        <FontAwesomeIcon icon={faShieldHalved} size='2x' color="#fff"/>
                    </Col>
                    <Col xs={10} md={11}>
                        Transações mais seguras
                    </Col>
                </Row>
                <Button variant="outline-light" onClick={onClick}>Abra sua conta</Button>
            </div>

        </Container>
    </Container>
)

export default Institutional