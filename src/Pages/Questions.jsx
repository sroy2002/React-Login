import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faTools, faUserTie, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import Options from '../Components/Options.jsx';

function Questions() {
  return (
    <div className='bg-[#ffefef] w-full p-[4rem] py-7'>
      <div className='absolute top-4 left-6  w-[3rem] h-[3rem] p-4  rounded-full hover:bg-gray-300 flex justify-center items-center cursor-pointer'>
        <Link to="/profile"> <FontAwesomeIcon icon={faArrowLeftLong} size='lg' /> </Link>
      </div>
      <div className=' text-center'>
        <p className='text-4xl font-bold mb-4'>
          What's your mission in <span className=' text-4xl font-brush text-[#756AB6]'>Palett.io</span>  ?
        </p>
        <p className=' text-md text-gray-500'>
          While the options you choose now should describe you well, feel free to update them as you further define your preferences.
        </p>
      </div>
      <div className=' flex flex-col lg:flex-row  md:flex-wrap lg:flex-nowrap my-[6rem] mx-4 xl:mx-[2rem] justify-center items-center '>
        <div className='mx-4'>
          <Options
            Icon={faCode}
            des="I'm a Developer, seeking design collaborators for my next project."
            details="Palett.io offers a wealth of inspiration with over 7 million design shots, fostering creativity and collaboration among developers and designers alike. Unleash the potential of your project with the perfect design partner."
          />
        </div>
        <div>
          <Options
            Icon={faUserTie}
            des="I'm an Entrepreneur looking for a designer to help brand my startup"
            details="Explore Palett.io's vast collection of design masterpieces, with over 7 million shots crafted by skilled designers. Find the perfect match to bring your vision to life and establish your brand's unique identity."
          />
        </div>
        <div className="">
          <Options
            Icon={faTools}
            des="My goal is to expand my skills by studying trendsetting design work"
            details="Embark on a journey of skill enhancement with Palett.io, home to over 7 million groundbreaking design concepts. Dive into trendsetting work curated by a vibrant community of designers, and elevate your craft to new heights"
          />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center mt-[-3rem]'>
        <p className='mb-4 italic'>
          <span className=' font-bold'>Note:</span> You can select multiple options.
        </p>
        <button className='w-[10rem] h-10 text-lg p-1 bg-[#756AB6] rounded-lg text-white font-semibold hover:bg-[#988be3] transition-transform transform hover:scale-105 hover:drop-shadow-md'>
          <Link to="/userProfile">Complete</Link>
        </button>
        <p className='mt-2 mb-4 text-sm text-gray-500 cursor-pointer hover:underline'>
          or Press <span className=' font-bold'> RETURN</span>
        </p>
      </div>
    </div>
  )
}

export default Questions
