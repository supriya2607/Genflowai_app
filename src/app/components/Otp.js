// Otp.js
import React from 'react';
import OTPInput from './Otplist.js'
import Link from 'next/link.js';


const Otp = () => {
  return (
 
     <div className='otpscreen'>      
     <h3>ENTER OTP</h3>
     <p className='re_enter'>Re-Enter Mobile No. +91945896</p>
      <div className='otplist'>
      <OTPInput />
      </div>
      <div className='resend'><p>Don't receive OTP?</p> <Link href= "/">Send Again</Link></div>
      <button  className="btns">Continue</button>
     </div>
 
  );
};

export default Otp;
