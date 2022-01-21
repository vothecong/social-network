import React, { useRef } from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { BsCardImage } from "react-icons/bs";

function PostForm() {
    const imgRef = useRef(null);
    const [images, setImages] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <Row>
            <Col xs={12} className="col">
                <details>
                    <summary className="wrapper-form-post position-relative p-1">
                        <div className="text-center position-absolute supper_form_post">
                            What are you thinking?
                        </div>
                    </summary>

                    <form onSubmit={handleSubmit}>
                        <div className="p-1 form-post d-flex flex-column">
                            <div className="d-flex justify-content-between align-items-center h-100 px-2">
                                <span className="text-capitalize fw-bold">create post</span>
                                <span
                                    className="header_form_post-close fw-bold fs-3"
                                    style={{ cursor: "pointer" }}
                                >
                                    {" "}
                                    &times;{" "}
                                </span>
                            </div>
                            <hr className="m-0" />
                            {/* header_form_post */}
                            <div className="body_form_post">
                                <textarea
                                    name="content"
                                    id="content"
                                    className="w-100"
                                    rows="8"
                                    placeholder="what are you thinking?"
                                ></textarea>

                                <div className="justify-content-end d-flex ">
                                    <input
                                        ref={imgRef}
                                        type="file"
                                        name="images"
                                        onChange={(e) => setImages(e.target.files)}
                                        hidden
                                        id="images"
                                        multiple
                                    />
                                    <BsCardImage
                                        className="fs-2 "
                                        onClick={() => imgRef.current.click()}
                                    />
                                </div>
                            </div>

                            {/* body_form_post */}
                            <div className="footer_form_post w-100">
                                <button
                                    type="button"
                                    className="btn btn-secondary text-capitalize d-block w-100"
                                >
                                    post
                                </button>
                            </div>
                        </div>
                    </form>
                    {/* form-post */}
                </details>
            </Col>
        </Row>
    );
}

export default PostForm;
