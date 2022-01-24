import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { RiShareForwardFill } from "react-icons/ri";
import { BsBookmarkFill, BsBookmark } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";

function CardFooter() {
    return (
        <div className="card-footer">
            <div className="card_footer_top d-flex justify-content-between">
                <div>
                    <AiOutlineHeart fontSize={35} className="px-1" />
                    <BiComment fontSize={35} className="px-1" />
                    <RiShareForwardFill fontSize={35} className="px-1" />
                </div>
                <div>
                    <BsBookmark fontSize={30} />
                </div>
            </div>
            {/* card_footer_top */}
            <div className="card_footer_comment">
                <div className="list-comment_card_footer">
                    list comments
                </div>
                {/* list-comment_card_footer */}
                <form>
                    <div>
                        <RiSendPlaneFill />
                    </div>
                </form>
            </div>
            {/* card_footer_top */}
        </div>
    );
}

export default CardFooter;
