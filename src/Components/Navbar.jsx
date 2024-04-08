import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBars, faCircleXmark, faBriefcase } from '@fortawesome/free-solid-svg-icons'

const url = "https://images.unsplash.com/photo-1554311825-6f9e499ba167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuc2NhcGV8ZW58MHwxfDB8fHww";


function Navbar() {

    const [userProfileImage, setUserProfileImage] = useState(null);
    useEffect(() => {
        const storedImage = localStorage.getItem('userImage');
        if (storedImage) {
            setUserProfileImage(storedImage);
        }
    }, []);
    const [nav, setNav] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    function handleNav() {
        setNav(!nav);
    }
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (isMobile && nav) {
                setNav(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobile, nav]);

    return (
        <div className=' bg-[#756AB6] h-[3.5rem] flex justify-between w-full items-center overflow-hidden '>
            <div className='flex items-center'>
                <div onClick={handleNav} className='block md:hidden ml-2'>
                    <FontAwesomeIcon
                        icon={faBars}
                        size='lg'
                        className='text-white hover:cursor-pointer' />
                </div>
                <div className={(nav) ? 'fixed left-0 top-0 h-full w-[50%] border-r bg-[#756AB6] text-lg text-white' : 'fixed left-[100%]'}>
                    <div className='flex justify-between items-center px-2'>
                        <div className=' mr-1 md:mr-2 p-3 pr-1 md:text-3xl text-3xl  font-medium text-[#FFE5E5] font-brush cursor-pointer'>
                            Palett.io
                        </div>
                        <div onClick={handleNav} className='block md:hidden pr-4'>
                            {
                                (nav) && <FontAwesomeIcon icon={faCircleXmark} size={25} className='cursor-pointer' />
                            }
                        </div>
                    </div>
                    <ul className='flex flex-col p-4 divide-y-[1px] divide-white'>
                        <li className='p-2 hover:text-[#E0AED0] hover:drop-shadow-md cursor-pointer'>Get Ideas</li>
                        <li className='p-2 hover:text-[#E0AED0] hover:drop-shadow-md cursor-pointer'>Find Jobs </li>
                        <li className='p-2 hover:text-[#E0AED0] hover:drop-shadow-md cursor-pointer'>Learn </li>
                        <li className='p-2 hover:text-[#E0AED0] hover:drop-shadow-md cursor-pointer'>Hire Designers </li>
                        <li className='p-2 hover:text-[#E0AED0] hover:drop-shadow-md cursor-pointer'>Pro </li>
                    </ul>
                </div>
                <div className=' mr-1 md:mr-2 p-3 pr-1 md:text-4xl text-3xl  font-medium text-[#FFE5E5] font-brush cursor-pointer' >
                    Palett.io
                </div>
                <div className='mx-6'>
                    <ul className=' hidden md:flex justify-between text-[0.9rem] md:leading-4 font-medium lg:text-base text-center py-4 items-center cursor-pointer'>
                        <li className=' text-white hover:text-[#E0AED0] hover:drop-shadow-md'>Get Ideas</li>
                        <li className='mx-2 md:mx-3 text-white hover:text-[#E0AED0] hover:drop-shadow-md'>Find Jobs </li>
                        <li className='mx-2 md:mx-3 text-white hover:text-[#E0AED0] hover:drop-shadow-md'>Learn </li>
                        <li className='mx-2 md:mx-3 text-white hover:text-[#E0AED0] hover:drop-shadow-md'>Hire Designers </li>
                        <li className='mx-2 md:mx-3 text-white hover:text-[#E0AED0] hover:drop-shadow-md'>Pro </li>
                    </ul>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center mr-2'>
                    <input
                        className=' p-[0.37rem] text-sm rounded-l-md  w-[90%] italic'
                        type="search"
                        placeholder='Search' />
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        size='lg'
                        className='sm:text-gray-600 bg-gray-200 p-[0.37rem] rounded-r-md cursor-pointer hover:bg-slate-200' />
                </div>
                <div className='my-4 mx-2 cursor-pointer'>
                    <FontAwesomeIcon
                        icon={faBriefcase}
                        size='lg'
                        className='text-white' />
                </div>
                <div className='min-w-[45px] min-h-[45px] overflow-hidden rounded-full mx-2 block cursor-pointer'>
                    {userProfileImage ? (
                        <img src={userProfileImage} className='w-[45px] h-[45px] object-cover rounded-full' alt="User Profile" />
                    ) : (
                        <img src={url} className='w-[45px] h-[45px] object-cover rounded-full' alt="User Profile" />
                    )}
                </div>
                <div className='flex items-center'>
                    <button className='h-9 py-2 bg-[#f7eaff] text-purple-800 font-medium rounded-md px-2 my-2 text-sm md:text-md hover:bg-slate-200 mr-2'>
                        Upload
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
