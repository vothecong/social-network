import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { LoginAction } from "../redux/actions/auth.action";

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory()
    const dispatch = useDispatch();
    const { auth } = useSelector(state => state);


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(LoginAction(email, password));
    };

    useEffect(() => {
        if (auth.user) history.push("/")
    }, [auth.user, history])

    return (
        <Container fluid>
            <Row>
                <Col>
                    <div className="position-relative form-login">
                        <h3 className="text-center">Login</h3>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                            >
                                <Form.Label>Email: </Form.Label>
                                <Form.Control
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                            >
                                <Form.Label>Password: </Form.Label>
                                <Form.Control
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                />
                            </Form.Group>
                            <Form.Group>
                                <Button
                                    type="submit"
                                    className="w-100"
                                    disabled={!email || !password}
                                >
                                    Login
                                </Button>
                            </Form.Group>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
