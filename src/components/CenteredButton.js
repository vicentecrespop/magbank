import React from "react";
import { Container, Button } from "react-bootstrap";

const CenteredButton = ({ children, onClick }) => (
        <Container className="d-flex justify-content-center">
            <Button className="my-5 px-5 py-3" variant="success" size="lg" onClick={onClick}>
                {children}
            </Button>
        </Container>
)

export default CenteredButton