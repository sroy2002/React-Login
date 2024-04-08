import React from 'react'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { signUpSchema } from '../schemas';

const initialValues = {
  name: "",
  username: "",
  email: "",
  password: "",
  checkbox: false,
};

function FormInput({ onEmailUpload }) {
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      console.log(values);
      const hasErrors = Object.keys(errors).length > 0;
      if (!hasErrors) {
        navigate('/profile');
      }
      action.resetForm();
    },
  });


  return (
    <div>
      <form 
        onSubmit={handleSubmit} 
        className='flex flex-col md:px-[4rem] px-4 items-center mb-4'>
        {/* Name and Username div */}
        <div className='flex flex-col md:flex-row justify-around w-[85%]'>
          <div className='md:w-[50%] w-full'>
            <label 
              htmlFor="name" 
              className="w-[80%] block m-2 text-xl">
              Name
            </label>
            <input 
              className="block border-[2px] rounded-[10px] m-2 p-2 w-full md:w-[90%]" 
              type="name" 
              name="name" 
              id="name" 
              placeholder="Enter your name" 
              value={values.name} 
              onChange={handleChange} 
              onBlur={handleBlur} 
              autoComplete='off'/>
              {errors.name && touched.name ? (
                <p className="text-red-700">{errors.name}</p>
              ) : null}
          </div>
          <div className='md:w-[50%] w-full'>
            <label 
              htmlFor="username" 
              className="w-[80%] block m-2 text-xl">
              Username
            </label>
            <input 
              className="block border-[2px] rounded-[10px] m-2 p-2 w-full md:w-[100%]" 
              type="username" 
              name="username" 
              id="username" 
              placeholder="Enter your username" 
              value={values.username} 
              onChange={handleChange} 
              onBlur={handleBlur} 
              autoComplete='off'/>
              {errors.username && touched.username ? (
                <p className="text-red-700">{errors.username}</p>
              ) : null}
          </div>
        </div>

        {/* Email and Password div */}
        <div className='w-[85%]'>
          <label 
            htmlFor="email" 
            className="w-[80%] block m-2 text-xl" >
            Email
          </label>
          <input 
            className="block border-[2px] rounded-[10px] m-2 p-2 w-full md:w-[100%] mr-4" 
            type="email" 
            name="email" 
            id="email" 
            placeholder="Enter your email" 
            value={values.email}
            onChange={(event) => {
              handleChange(event);
              onEmailUpload(event.target.value);
            }} 
            onBlur={handleBlur} 
            autoComplete='off' />
            {errors.email && touched.email ? (
              <p className="text-red-700">{errors.email}</p>
            ) : null}
          <label 
            htmlFor="password" 
            className="w-[80%] block m-2 text-xl" >
            Password
          </label>
          <input 
            className="block border-[2px] rounded-[10px] m-2 p-2 w-full md:w-[100%]" 
            type="password" 
            name="password" 
            id="password " 
            placeholder="Enter Password (6+ char)" 
            value={values.password} 
            onChange={handleChange} 
            onBlur={handleBlur} 
            autoComplete='off' />
            {errors.password && touched.password ? (
            <p className="text-red-700">{errors.password}</p>
            ) : null}
        </div>

        {/* Checkbox and Terms Div */}
        <div className='flex flex-col items-center'>
          <div className='flex w-[85%]'>
            <input className=' m-3 w-[1.5rem] h-[1.5rem] p-2 '
              type="checkbox"
              name="checkbox"
              id="checkbox"
              checked={values.checkbox} // Add this line
              onChange={handleChange} />
            <label className=' m-2  text-[1rem]' >
              Creating an account means you're okay with our
              <span className=' text-blue-700'> Terms of Service,  Privacy Policy, </span>
              and our default
              <span className=' text-blue-700'> Notification Settings</span></label>
          </div>
          {errors.checkbox && touched.checkbox ? (
            <p className="text-red-700">{errors.checkbox}</p>
          ) : null}
        </div>

        {/* Button div */}
        <div className=' mb-8 flex flex-col justify-center items-center '>
          <button
            type='submit' 
            className=' w-[50%] md:w-[40%] m-4 mt-4 bg-[#756AB6] text-white text-[1.1rem] p-3 rounded-[5rem] hover:bg-[#988be3] transition-transform transform hover:scale-105 hover:drop-shadow-md'>  
            Create Account 
          </button>
          <p className='m-2'>
            Already a member ? <span className=' underline text-blue-700 cursor-pointer'>Sign in</span>
          </p>
          <p className=' text-gray-600 text-xs mb-6 m-2'> 
            This site is protected by reCAPTCHA and the Google <span>Privacy Policy</span> and <span> Terms of Service</span> apply
          </p>
        </div>
      </form>
    </div>
  )
}

export default FormInput
