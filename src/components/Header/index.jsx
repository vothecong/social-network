import React from "react";
import { Col, Container, NavDropdown, Row } from "react-bootstrap";
import "./header.css";
import { ImHome } from "react-icons/im";
import { FaFacebookMessenger } from "react-icons/fa";
import { RiCompassDiscoverFill } from "react-icons/ri";
import { IoNotifications, IoPersonCircleSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <Container className="header">
            <Row>
                <Col xs={12} lg={4} className="col">
                    <h3
                        className="text-capitalize text-center logo 
                    d-lg-flex align-items-lg-center justify-content-lg-start"
                    >
                        social network
                    </h3>
                </Col>
                <Col xs={12} lg={8} className="col">
                    <ul
                        className="d-flex justify-content-around 
                    justify-content-lg-end align-items-center h-100 menu-header"
                    >
                        <li className="nav-link">
                            <NavLink to="/">
                                <ImHome fontSize={30} />
                            </NavLink>
                        </li>
                        <li className="nav-link">
                            <NavLink to="/">
                                <FaFacebookMessenger fontSize={30} />
                            </NavLink>
                        </li>
                        <li className="nav-link">
                            <NavLink to="/">
                                <RiCompassDiscoverFill fontSize={30} />
                            </NavLink>
                        </li>
                        <li>
                            <NavDropdown
                                title={
                                    <div className="pull-left">
                                        <IoNotifications fontSize={30} />
                                    </div>
                                }
                                id="basic-nav-dropdown"
                                className="show_notify"
                            >
                                <Link to="/profile" className=" text-capitalize px-3">
                                    profile
                                </Link>{" "}
                                <br />
                                <label htmlFor="" className=" text-capitalize px-3">
                                    dark mode
                                </label>
                                <NavDropdown.Divider />
                                <div className=" text-capitalize px-3">logout</div>
                            </NavDropdown>
                        </li>
                        <li>
                            <NavDropdown
                                title={
                                    <div className="pull-left">
                                        {/* <MdAccountCircle fontSize={30} /> */}
                                        <IoPersonCircleSharp fontSize={30} />
                                    </div>
                                }
                                id="basic-nav-dropdown"
                                className="show_profile"
                            >
                                <Link to="/profile" className=" text-capitalize px-3">
                                    profile
                                </Link>{" "}
                                <br />
                                <label htmlFor="" className=" text-capitalize px-3">
                                    dark mode
                                </label>
                                <NavDropdown.Divider />
                                <div className=" text-capitalize px-3">logout</div>
                            </NavDropdown>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;
