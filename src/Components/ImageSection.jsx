import React from 'react'
import abstract from '../Images/abs4.jpg'

function ImageSection() {
  return (
      <div className="h-screen w-full lg:w-1/2 bg-gradient-to-b from-[#7f648f] to-[#85407f]">
        <p className=' absolute text-4xl m-4 font-semi text-white left-[1rem]   font-brush'> 
          Palett.io
        </p>
        <img 
          src={abstract} 
          className="  object-contain sm:object-contain w-full h-full" 
          alt="abstract"/>
        <p className='absolute bottom-4 m-2 left-2 text-xs text-gray-400'>
            Photo by 
            <a href="https://unsplash.com/@mvogulov?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Max Petrunin
            </a> 
            on <a href="https://unsplash.com/photos/background-pattern-i7-keB9JgBo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash
            </a>
        </p>
      </div>
    )
  }

export default ImageSection
