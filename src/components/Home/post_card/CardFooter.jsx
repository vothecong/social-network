import React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BiComment } from 'react-icons/bi';
import { RiShareForwardFill } from 'react-icons/ri';
import { BsBookmarkFill, BsBookmark } from 'react-icons/bs';


function CardFooter() {
    return (
        <div className='card-footer' >
            <div className="card_footer_top d-flex justify-content-between">
                <div>
                    <AiOutlineHeart fontSize={30} className='px-2' />
                    <BiComment fontSize={30} className='px-2' />
                    <RiShareForwardFill fontSize={30} className='px-2' />
                </div>
                <div>
                    <BsBookmark fontSize={30} />
                </div>
            </div>
        </div>
    )
}

export default CardFooter;
