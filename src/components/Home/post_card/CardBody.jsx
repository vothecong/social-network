import React from "react";
import { Carousel } from "react-bootstrap";

function CardBody() {
    return (
        <div className="post-card-body">
            <div className="card_body_content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id nemo
                sapiente qui omnis deleniti! Facilis, nihil, ratione adipisci tempora
                quisquam sit facere numquam, saepe dolorem voluptatum perspiciatis enim
                labore tempore!
            </div>
            <Carousel className="h-100">
                <Carousel.Item className="h-100">
                    <img
                        className="d-block w-100 h-100"
                        src="https://img-19.ccm2.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item className="h-100">
                    <img
                        className="d-block w-100 h-100"
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item className="h-100">
                    <img
                        className="d-block w-100 h-100"
                        src="https://www.w3schools.com/w3css/img_lights.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CardBody;
