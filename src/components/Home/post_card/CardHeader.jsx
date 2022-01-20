import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import Avatar from '../../Avatar';

function CardHeader() {
    return (
        <div className='post_header d-flex align-items-center justify-content-between p-2' >
            <div className=" d-flex align-items-center" >
                <Avatar />
                <div className='mx-2' >
                    <span>Võ Thế Công</span> <br />
                    <span>12 phút</span>
                </div>
            </div>
            <div>
                <NavDropdown
                    title={
                        <div className="pull-left">
                            <BiDotsHorizontalRounded />
                        </div>
                    }
                    id="basic-nav-dropdown"
                    className="show_post_header"
                >
                    <div className=" text-capitalize px-3">logout</div>
                    <NavDropdown.Divider />
                    <div className=" text-capitalize px-3">logout</div>
                    <NavDropdown.Divider />
                    <div className=" text-capitalize px-3">logout</div>
                </NavDropdown>
            </div>
        </div>
    )
}

export default CardHeader;
