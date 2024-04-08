import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord,faInstagram,faSquareFacebook,faXTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons'

const iconStyles = "mr-4 cursor-pointer";
const pStyles = "mb-1 text-gray-600 hover:underline hover:text-gray-800 cursor-pointer text-sm";
const hstyles = "font-bold mb-2 text-lg md:text-base";
const subDivStyles = "mx-8 md:mx-10 my-8";

function Footer() {
  return (
    <div className=' w-full bg-[#e1dcff]'>
      <div className='flex justify-around flex-col lg:flex-row'> 
        <div className='m-4 p-4  lg:w-[20%] w-[60%]'>
            <div>
                <p className=' text-5xl md:text-3xl my-4 font-semibold text-[#756AB6] font-brush'> 
                  Palett.io
                </p>
            </div>
            <div className="my-4">
                <p className=' text-gray-600 text-base'> 
                    Palett.io is a hub for designers, artists, and creatives to showcase their talents, discover new opportunities, and be part of a thriving community.
                </p>
            </div>
            <div className="thirdchild">
                <FontAwesomeIcon 
                    icon={faDiscord}  
                    size='lg'
                    className={iconStyles}/>
                <FontAwesomeIcon 
                    icon={faInstagram} 
                    size='lg'
                    className={iconStyles}/>
                <FontAwesomeIcon 
                    icon={faSquareFacebook} 
                    size='lg'
                    className={iconStyles}/>
                <FontAwesomeIcon 
                    icon={faXTwitter} 
                    size='lg'
                    className={iconStyles}/>
                <FontAwesomeIcon 
                    icon={faPinterest} 
                    size='lg'
                    className={iconStyles}/>
            </div>
        </div>
        <div className='flex justify-around flex-col md:flex-row'>
        <div className={subDivStyles}>
            <p className={hstyles}>For Designers/Creatives</p>
            <p className={pStyles}>Portfolio Showcase</p>
            <p className={pStyles}>Jobs & Opportunities</p>
            <p className={pStyles}>Community Forums</p>
            <p className={pStyles}>Resources & Tutorials</p>
            <p className='font-bold mb-1 hover:underline cursor-pointer text-sm'><Link to="/signup">Join/Sign Up</Link></p>
            <p className={pStyles}>Log In </p>
            <p className={pStyles}>Subscription Plans</p>
        </div>
        <div className={subDivStyles}>
            <p className={hstyles}>Explore</p>
            <p className={pStyles}>Portfolio Showcase</p>
            <p className={pStyles}>Popular Portfolios</p>
            <p className={pStyles}>Featured Artists</p>
            <p className={pStyles}>Trending Designs</p>
            <p className={pStyles}>Digital Galleries</p>
        </div>
        <div className={subDivStyles}>
            <p className={hstyles}>About Palett.io</p>
            <p className={pStyles}>Our Story</p>
            <p className={pStyles}>The Team</p>
            <p className={pStyles}>Featured Artists</p>
            <p className={pStyles}>Brand Assets</p>
            <p className={pStyles}> Success Stories</p>
        </div>
        <div className={subDivStyles}>
            <p className={hstyles}>Support</p>
            <p className={pStyles}>FAQ</p>
            <p className={pStyles}>Contact Us</p>
            <p className={pStyles}>Feedback & Ideas</p>
            <p className='font-bold mb-1  text-sm'>Legal</p>
            <p className={pStyles}>Terms of Service</p>
            <p className={pStyles}>Privacy Policy</p>
            <p className={pStyles}>Community Guidelines</p>
        </div>
        </div>
      </div>
      <div className=' md:text-center border-t border-[#c6c6ca] p-7 md:mx-[6rem] mx-2  '>
        <p className=' text-sm '>© 2024 Palett.io. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
