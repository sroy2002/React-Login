import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'

const url = "https://images.unsplash.com/photo-1554311825-6f9e499ba167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuc2NhcGV8ZW58MHwxfDB8fHww";

function AvatarSection({ onImageUpload, imageUrl }) {
  const [avatarUrl, setAvatarUrl] = useState(imageUrl || url);
  const fileInputRef = useRef(null);
  const updateAvatar = () => {
    const file = fileInputRef.current.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const imageUrl = e.target.result;
        setAvatarUrl(imageUrl);
        onImageUpload(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col  md:flex-row justify-center items-center p-4">
      <div className='w-[150px] h-[150px] border-[6px]  rounded-[50%] md:w-[180px] md:h-[180px] border-[#756AB6] overflow-hidden md:mr-6 mb-4 '>
        <img className='object-cover ' src={avatarUrl} alt="Avatar" />
      </div>
      <div className=" ml-3">
        <label className='block mb-3 w-fit'>
          <span className='sr-only'>Choose Profile Photo</span>
          <input
            type="file"
            accept='image/*'
            ref={fileInputRef}
            onChange={updateAvatar}
            className='block w-full text-sm text-slate-500
            file:mr-4 file:py-1 file:px-2
            file:rounded-lg file:border
            file:text-sm file:border-[#756AB6]
            hover:file:bg-[#756AB6] hover:file:text-white
           cursor-pointer'/>
        </label>
        <div className="flex items-center pl-2 cursor-pointer">
          <FontAwesomeIcon className='mr-2 w-3 h-3' icon={faAnglesRight} color="gray" />
          <p className=" text-sm text-gray-500 hover:underline">
            or choose our defaults
          </p>
        </div>
      </div>
    </div>
  )
}

export default AvatarSection







