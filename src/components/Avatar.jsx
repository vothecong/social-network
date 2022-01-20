import React from 'react';

function Avatar({ src, className }) {
    return (
        <div className='avatar' >
            <img src={src ? src : 'https://www.w3schools.com/howto/img_avatar.png'} alt="avatar" />
        </div>
    )
}

export default Avatar;
