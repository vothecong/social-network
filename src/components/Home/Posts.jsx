import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Avatar from "../Avatar";
import PortCard from "../PortCard";
import PostForm from "./PostForm";

function Posts() {
    return (
        <Container>
            <PostForm />

            <PortCard />
        </Container>
    );
}

export default Posts;
