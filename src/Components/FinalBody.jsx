import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons'

function FinalBody() {

  const [userEmail, updateUserEmail] = useState(null);
  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      updateUserEmail(storedEmail);
    }
  }, []);

  return (
    <div className='my-[7rem] md:p-6 flex flex-col items-center px-[3rem] text-center'>
      <p className=' text-3xl md:text-4xl font-bold mb-4 '>
        Please Verify Your Email...
      </p>
      <FontAwesomeIcon 
        icon={faEnvelopeCircleCheck} 
        className=' text-6xl md:text-8xl text-[#b0a5ef] mb-4' />
      <p className=' mb-4'>
        Please verify your email address. We've sent confirmation email to:
      </p>
      {userEmail && <p className=' text-2xl font-bold mb-2 '>{userEmail}</p>}
      <p className=' mb-2 text-gray-500'>
        Click the confirmation link in the email to start using Palett.io .
      </p>
      <p className=' text-gray-500 '>
        Didn't receive the email ? Check your spam folder it may have been caught by a filter. 
      </p>
      <p className=' mb-2 text-gray-500 '>
        If you still don't see it, you can <span className=' font-medium text-[#756AB6] hover:underline cursor-pointer'>resend the confirmation email.</span>
      </p>
      <p className=' mb-2 text-gray-500'>
        Wong email address? <span className=' font-medium text-[#756AB6] hover:underline cursor-pointer'>
          Change it.</span>
      </p>
    </div>
  )
}

export default FinalBody
