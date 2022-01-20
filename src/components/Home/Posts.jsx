import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PortCard from '../PortCard';

function Posts() {
    return (
        <Container>
            <PortCard />
            <PortCard />
            <PortCard />
            <PortCard />
            <PortCard />
        </Container>
    )
}

export default Posts;
