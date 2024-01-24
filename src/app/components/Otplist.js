'use client'
import React, { useRef } from 'react';

const OTPInput = () => {
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleChange = (index, value) => {
 
    if (value && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  return (
    <div>
      {inputRefs.map((inputRef, index) => (
        <input className='otpinput'
          key={index}
          ref={inputRef}
          type="text"
          maxLength="1"
          onChange={(e) => handleChange(index, e.target.value)}
        />
      ))}
    </div>
  );
};

export default OTPInput;
