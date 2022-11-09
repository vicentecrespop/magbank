import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faTwitter,
    faYoutube
} from '@fortawesome/free-brands-svg-icons'
import MagBank from '../assets/MAGbank.jpg'
import AppStore from '../assets/app-store.jpg'
import GooglePlay from '../assets/google-play.jpg'
import './Footer.scss'

const Footer = () => (
    <footer>
        <Container>
            <Row>
                <Col className="my-5" xs={12} lg={4}>
                    <Col className="justify-content-center d-flex">
                        <img src={MagBank} alt="MagBank-logo" />
                    </Col>
                </Col>
                <Col className="mb-5 my-lg-5" xs={12} lg={6}>
                    <Col className="footer-logos">
                        <img src={AppStore} alt="AppStore" />
                        <img src={GooglePlay} alt="GooglePlay" />
                    </Col>
                </Col>
                <Col lg={2} xs={12}>
                    <Col className="d-flex justify-content-center mb-5 mt-lg-5 pt-lg-2">
                        <FontAwesomeIcon icon={faFacebookSquare} size="xl" color="#7c7c7c"/>
                        <FontAwesomeIcon icon={faTwitter} size="xl" color="#7c7c7c" style={{ marginLeft: '20px', marginRight: '22px'}}/>            
                        <FontAwesomeIcon icon={faYoutube} size="xl" color="#7c7c7c"/>
                    </Col>
                </Col>
            </Row>
        </Container>
    </footer>
)

export default Footer