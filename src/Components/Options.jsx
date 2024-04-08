import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function Options({ Icon, des, details }) {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  }
  
  return (
    <div className={` max-w-[26rem] md:max-w-[28rem] relative bg-gray-50 border border-gray-500 rounded-xl  pb-4 sm:px-8 text-center  cursor-pointer   drop-shadow-md transition-transform transform hover:scale-105 ${isClicked && 'border-[#756AB6] border-4'} 
        flex flex-col justify-center items-center m-4 hover:drop-shadow-xl hover:bg-slate-100`} onClick={handleClick}>
      <div className='absolute -top-12 left-1/2 transform -translate-x-1/2 w-[80px] h-[80px] rounded-full overflow-hidden border-4 bg-white border-[#756AB6] flex justify-center items-center sm:w-[100px] sm:h-[100px] sm:border-[6px] hover:drop-shadow-sm'>
        <FontAwesomeIcon 
          icon={Icon} 
          className=' text-4xl sm:text-5xl text-gray-700 hover:drop-shadow-sm' />
      </div>
      <div className='px-4 sm:px-1 mt-6 md:mt-2'>
        <p className='my-8 text-base sm:mt-20 sm:text-lg font-semibold '>{des}</p>
        {isClicked && <p className=' text-sm text-gray-600'>{details}</p>}
      </div>
      <div className='border-2 w-7 h-7 rounded-full m-4 '>
        {isClicked && <FontAwesomeIcon icon={faCircleCheck} size='lg' className='w-[100%] h-[100%]' />}
      </div>
    </div>
  )
}

export default Options
