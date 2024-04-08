import React, { useState } from 'react'
import FormInput from './FormInput'
import ImageSection from './ImageSection';

function Signup() {
  const [emailId, setEmailId] = useState('');
  const handleEmail = (emailId) => {
    setEmailId(emailId);
    localStorage.setItem('userEmail', emailId);
  }
  return (
    <div className={` w-full  bg-[#FFE5E5] flex lg:flex-row flex-col  `} >
      <ImageSection />
      <div className={`px-[4rem] my-4 flex flex-col justify-around `}>
        <h1 className='text-4xl font-bold text-center m-6'>
          Sign Up to <span className=' font-brush text-[#756AB6]'>Palett.io</span>
        </h1>
        <FormInput 
            onEmailUpload={handleEmail} 
            emailId={emailId} />
      </div>
    </div>
  )
}
export default Signup
