import React from 'react';
import noimg from '@/app/assets/images/noimg.jpg';
import Image from 'next/image';

const InfoBar = () => {
  return (
    <>
      <div className='userinfo'>
        <div className='user_dfault_img'>
          <Image src={noimg} alt="" />
          <div className='editicon'><i className="fa-solid fa-pencil"></i></div>
        </div>
        <div className='userdlist'>
            <h3>User Name</h3>
            <p>8447984556</p>
        </div>
      </div>
    </>
  );
};

export default InfoBar;
