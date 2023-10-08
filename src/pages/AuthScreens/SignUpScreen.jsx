import React, { useState } from 'react';
import signUpImg from '../../assets/images/hue_image.svg';
import Nav from '../../components/Navigation/Nav';
import { FcGoogle } from 'react-icons/fc';
import { BsApple, BsEye, BsEyeSlash } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { toast } from 'react-toastify';


const SignUpScreen = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [Data, setData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password, username } = Data;
    if (!username || !email || !password) {
      toast.error('Please fill in all fields.');
    } else {
      console.log(Data);
      // You can submit the form data or perform other actions here.
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...Data,
      [name]: value,
    });
  };

  return (
    <>
      <div className='hidden lg:block'>
        <Nav />
      </div>

      <div className='lg:flex  justify-center items-center gap-16 lg:mb-20'>

      <div className='hidden lg:block'>
        <h1 className='text-thirtytwoPixels font-medium my-6'>
          Welcome to LingoLeap
        </h1>
        <img src={signUpImg} alt='' />
      </div>

      <div className='lg:w-threeSixtySix'>
        <h1 className='my-6 text-center text-thirtyPixels mt-14 lg:text-thirtytwoPixels lg:font-medium '>
          Create an account
        </h1>
        <p className='text-center text-xs font-extralight lg:text-sm text-grayScale' style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
          Please note that email verification is required for signup. Your email
          will only be used to verify your identity for security purposes.
        </p>
        <div className='w-full px-4 my-4'>
          <button className='border border-primaryColor rounded-md flex items-center justify-center gap-2 text-primaryColor w-full text-xs font-normal h-thirtySixPixels lg:h-fourtyTwopx lg:w-threeSixtySix lg:text-lg'>
            <FcGoogle className='h-nineteen w-nineteen' /> Signup with Google
          </button>
        </div>
        <div className='w-full px-4'>
          <button className='border border-primaryColor rounded-md flex items-center justify-center gap-2 text-primaryColor w-full text-xs font-normal h-thirtySixPixels lg:h-fourtyTwopx lg:w-threeSixtySix lg:text-lg'>
            <BsApple className='h-nineteen w-nineteen text-blackNeutral' /> Signup
            with Google
          </button>
        </div>

        <div className='flex items-center px-4 pt-8 pb-3 lg:pt-3 lg:w-threeNintyFivepx'>
          <div className='flex-grow border-b border-grayScale2'></div>
          <span className='mx-3 font-extralight text-xs  lg:text-sm'>or</span>
          <div className='flex-grow border-b border-grayScale2'></div>
        </div>

        <div className='px-4 py-4 '>
          <input
            type='text'
            id='username'
            name='username'
            className='border border-grayScale text-grayScale rounded-md h-fourtypx w-full text-xs font-extralight px-4 lg:text-base lg:h-fourtyTwopx lg:w-threeSixtySix'
            placeholder='Username'
            value={Data.username}
            onChange={handleInputChange}
          />
        </div>

        <div className='mb-4 relative px-4'>
          <div className='relative '>
            <HiOutlineMail className='absolute top-4 right-3 text-grayScale lg:text-xl lg:top-3 lg:-right-5' />
            <input
              type='email'
              id='email'
              name='email'
              className='border rounded-md px-4 h-fourtypx w-full border-grayScale text-xs font-extralight lg:h-fourtyTwopx lg:text-base lg:w-threeSixtySix'
              placeholder='Email Address'
              value={Data.email}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className='relative px-4'>
          <div className='relative'>
            <input
              type={showPassword ? 'text' : 'password'}
              id='password'
              name='password'
              className='border rounded-md px-4 h-fourtypx w-full border-grayScale text-xs font-extralight lg:text-base lg:h-fourtyTwopx lg:w-threeSixtySix'
              placeholder='Enter your password'
              value={Data.password}
              onChange={handleInputChange}
            />
            <span
              className='absolute top-4 right-3 text-gray-500 cursor-pointer lg:text-xl lg:top-3 lg:-right-5'
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <BsEye /> : <BsEyeSlash />}
            </span>
          </div>
          </div>
          
          <div className='flex items-center px-4 pb-4 pt-1 gap-1 lg:pb-8 lg:w-threeSixtySix '>
          <span className='text-xs lg:text-sm'>For a secure password use</span>
          <span className='text-primaryColor text-xs lg:text-sm'>8 characters</span>
        </div>

        <div className='w-full px-4'>
          <button
            type='submit'
            onClick={handleSubmit}
            className='border border-primaryColor bg-primaryColor rounded-md flex items-center justify-center gap-2 text-white w-full text-sm font-normal h-fourtypx lg:h-fourtyFivepx lg:w-threeSixtySix lg:text-lg'
          >
            Sign Up
          </button>
        </div>

        <div className='flex items-center justify-center my-1 lg:w-threeSixtySix'>
          <span className=' text-sm'>Have an Account?</span>
          <span className='text-primaryColor text-sm'>Log in</span>
        </div>
      </div>
      </div>
    </>
  );

}

export default SignUpScreen