import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Avatar from "../../components/Avatar";

function Profile() {
    const { id } = useParams();
    const { auth } = useSelector((state) => state);
    const [saveTab, setSaveTab] = useState(false);

    return (
        <Container>
            <Row>
                <Col xs={12} md={12} className="col">
                    <div className=" profile-header p-4 d-md-flex ">
                        <div className="profile-avatar">
                            <Avatar className={"profile_avatar"} />
                        </div>
                        <div className="profile-info ps-md-5 w-100  ">
                            <div className="profile-info-user">
                                <div className="d-md-flex justify-content-md-between w-100 align-items-center">
                                    <span className="text-capitalize fs-4 fw-bold">
                                        {" "}
                                        võ thế công
                                    </span>
                                    <div className="profile-button text-capitalize ">
                                        {!(auth.user._id === id) ? (
                                            <>
                                                <button
                                                    type="button"
                                                    className="text-capitalize btn btn-outline-primary me-1 fw-bold fs-5"
                                                >
                                                    edit profile
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <button
                                                    type="button"
                                                    className="text-capitalize btn btn-outline-primary me-1 fw-bold fs-5"
                                                >
                                                    follow
                                                </button>
                                                <button
                                                    type="button"
                                                    className="text-capitalize btn btn-outline-danger ms-1 fw-bold fs-5"
                                                >
                                                    unFollow
                                                </button>
                                            </>
                                        )}
                                    </div>
                                    {/* profile-button */}
                                </div>
                                <div className="fw-bold fs-5">
                                    <span className="text-capitalize pe-2">0 followers</span>
                                    <span className="text-capitalize ps-2">0 following</span>
                                </div>
                                <span className="fw-bolder fs-5"> thecong </span> <br />
                                <span className="fw-bolder fs-5"> thecong@gmail.com </span>
                            </div>
                        </div>
                        {/* profile-info */}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="col">
                    <div className="wrapper profile-post ">
                        <div className="profile-post-save d-flex justify-content-center border-top border-bottom">
                            <span
                                className={`text-uppercase fw-bold fs-3 p-2 ${saveTab ? "" : "active"}`}
                                style={{
                                    cursor: "pointer",
                                }}
                                onClick={() => setSaveTab(false)}
                            >
                                posts
                            </span>
                            <span
                                className={`text-uppercase fw-bold fs-3 p-2 ${saveTab ? "active" : ""
                                    }`}
                                style={{ cursor: "pointer" }}
                                onClick={() => setSaveTab(true)}
                            >
                                saved
                            </span>
                        </div>
                        {/* profile-post-save */}
                        <div className="profile-list-post position-relative mt-2">
                            <Row>
                                <Col md={3} xs={12} >
                                    <div className="post_profile my-1">
                                        post
                                    </div>
                                </Col>
                                <Col md={3} xs={12} >
                                    <div className="post_profile my-1">
                                        post
                                    </div>
                                </Col>
                                <Col md={3} xs={12} >
                                    <div className="post_profile my-1">
                                        post
                                    </div>
                                </Col>
                                <Col md={3} xs={12} >
                                    <div className="post_profile my-1">
                                        post
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={3} xs={12} >
                                    <div className="post_profile my-1">
                                        post
                                    </div>
                                </Col>
                                <Col md={3} xs={12} >
                                    <div className="post_profile my-1">
                                        post
                                    </div>
                                </Col>
                                <Col md={3} xs={12} >
                                    <div className="post_profile my-1">
                                        post
                                    </div>
                                </Col>
                                <Col md={3} xs={12} >
                                    <div className="post_profile my-1">
                                        post
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        {/* profile-list-post */}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Profile;
