import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './CardList.scss'

const CardList = ({ posts }) => (
    <Container className="w-75">
        <Row>
            {posts && posts.map(({ id, image, title, text, action }) => (
                <Col xs={12} lg={4} key={id} className="cardItem">
                    <Card className="mx-auto my-3">
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{text}</Card.Text>
                            <Button variant="danger">{action}</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
)

export default CardList