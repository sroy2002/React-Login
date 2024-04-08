import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import AvatarSection from '../Components/AvatarSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faUser } from '@fortawesome/free-solid-svg-icons'

function Profile() {
  const [imageUrl, setImageUrl] = useState('');
  const handleImageUpload = (imageUrl) => {
    setImageUrl(imageUrl);
    localStorage.setItem('userImage', imageUrl);
  };

  return (
    <div className=' bg-[#FFE5E5] w-full px-[4rem]  lg:px-[10rem] xl:px-[25rem]  py-[2rem]'>
      <p className=' absolute text-2xl  font-medium  right-[1rem] top-[0.5rem] text-[#756AB6] font-brush '> Palett.io</p>
      <div className=' bg-white rounded-xl p-8 m-4 lg:min-w-[682.4px] drop-shadow-lg '>
        <div className=' pl-6 ' >
          <h1 className=' text-2xl md:text-3xl font-bold'>Welcome! Let's build your profile</h1>
          <p className=' mt-1 text-gray-500'>Let others know you better!</p>
        </div>
        <div className=' pl-6 my-6'>
          <div className='flex items-center '>
            <FontAwesomeIcon
              className='mr-4 w-4 h-4'
              size='xl'
              icon={faUser} />
            <h2 className=' text-xl my-4 md:text-2xl font-bold'>Add An Avatar</h2>
          </div>
          <div>
            <AvatarSection
              onImageUpload={handleImageUpload}
              imageUrl={imageUrl} />
          </div>
        </div>
        <div className=' pl-6'>
          <div className='flex items-center'>
            <FontAwesomeIcon
              className='mr-2 w-4 h-4'
              size='xl'
              icon={faLocationDot} />
            <h2 className='text-xl my-4 md:text-2xl font-bold'>Your Location</h2>
          </div>
          <input className=' ml-6 w-5/6 bg-white border-b-[1.5px] border-gray-400  focus:outline-none  h-7 ' placeholder='Enter your location' />
        </div>
        <div className='my-[3rem] flex flex-col justify-center items-center'>
          <button className='w-[7rem] h-[3rem] text-xl p-1 bg-[#756AB6] rounded-lg text-white font-semibold hover:bg-[#988be3] transition-transform transform hover:scale-105 hover:drop-shadow-md '> <Link to={"/questions"}>Next</Link> </button>
          <p className='text-sm text-gray-500'>or Press Return</p>
        </div>
      </div>
    </div>
  )
}

export default Profile
