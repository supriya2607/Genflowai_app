'use client'
import React, { useState } from "react";
import logo from "@/app/assets/images/logo.png";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from "next/image";


function Login() {
 
  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(true);

  const handleChange = (value) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    // console.log(phoneNumber)
    const phoneNumberPattern = /^((\\+[1-9]{1,4}[ \\-])|(\\([0-9]{2,3}\\)[ \\-])|([0-9]{2,4})[ \\-])?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/    ;
    const phonevalidation =  phoneNumberPattern.test(phoneNumber);
    console.log(phonevalidation)
    return phonevalidation;
  };
  const notify = () => toast("Invalid phone number");

  return (
    <>
      <div className="loginpage">
        <div className="loginscreen">
          <div className="loginlogo">
            <Image src={logo} alt="Logo" />
          </div>
          <div className="form-controls">
            <PhoneInput country={'in'}placeholder="Mobile No" value={phoneNumber} onChange={handleChange}inputProps={{required :true,}}/>
            {/* {!valid && <p>Invalid phone number</p>} */}
          </div>
          <button type="submit"  onClick={notify} className="btns">Continue</button>
        
        </div>
      </div>
       {!valid && <p><ToastContainer /></p>}
      
    </>
  );
}

export default Login;
