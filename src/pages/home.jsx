import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Posts from '../components/Home/Posts';

function Home() {
    return (
        <Container >
            <Row>
                <Col xs={12} md={8} >
                    <div className="wrapper border border-success">
                        <Posts />
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <div className="wrapper border border-warning">
                        right home
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;
