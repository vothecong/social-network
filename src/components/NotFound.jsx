import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function NotFound() {
    return (
        <Container className="d-flex justify-content-center align-items-center wrapper">
            <Row>
                <Col>
                    <h1
                        className="fw-bold text-center text-capitalize"
                    >
                        not found | 404
                    </h1>
                </Col>
            </Row>
        </Container>
    );
}

export default NotFound;
