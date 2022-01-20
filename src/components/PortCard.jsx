import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CardBody from './Home/post_card/CardBody';
import CardFooter from './Home/post_card/CardFooter';
import CardHeader from './Home/post_card/CardHeader';

function PortCard() {
    return (
        <div className='mt-2'>
            <Row>
                <Col>
                    <div className='p-1 post-card' >
                        <CardHeader />
                        <CardBody />
                        <CardFooter />
                    </div>
                </Col>
            </Row>
        </div>


    )
}

export default PortCard;
