import { Link } from 'react-router-dom';
import { google, github } from '@constants';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <section className='auth-page'>
      <div className='auth-card'>
        {/* Header */}
        <div className='text-center mb-6'>
          <h2>Create an account</h2>
          <p className='text-sm text-gray-500 mt-1'>
            Get started in just a few seconds
          </p>
        </div>
        {/* Social Signup */}
        {/* TODO */}{' '}
        <div className='auth-social-btn'>
          <button type='button'>
            <img src={google} alt='Google' className='w-5 h-5' />
            Continue with Google
          </button>

          <button type='button'>
            <img src={github} alt='GitHub' className='w-5 h-5' />
            Continue with GitHub
          </button>
        </div>{' '}
        {/* Divider */}
        <div className='auth-divider'>
          {' '}
          <div />
          <span>or</span>
          <div />
        </div>
        {/* Signup Form */}
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              id='username'
              name='username'
              placeholder='John Doe'
            />
          </div>

          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='you@example.com'
            />
          </div>

          <div className='relative'>
            <label htmlFor='password'>Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id='password'
              name='password'
              placeholder='••••••••'
            />
            <button
              type='button'
              className='icon-button'
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}>
              {showPassword ? (
                <EyeOff className='icon' />
              ) : (
                <Eye className='icon' />
              )}
            </button>
          </div>

          <div className='relative'>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input
              id='confirmPassword'
              name='confirmPassword'
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder='••••••••'
            />
            <button
              type='button'
              className='icon-button'
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              aria-label={
                showConfirmPassword ? 'Hide password' : 'Show password'
              }>
              {showConfirmPassword ? (
                <EyeOff className='icon' />
              ) : (
                <Eye className='icon' />
              )}
            </button>
          </div>

          {/* Submit */}
          <button type='submit' className='submit'>
            Create account
          </button>
        </form>
        {/* Terms */}
        <p className='auth-terms'>
          By signing up, you agree to our{' '}
          <span className='underline cursor-pointer'>Terms</span> &{' '}
          <span className='underline cursor-pointer'>Privacy Policy</span>
        </p>
        {/* Footer */}
        <p className='auth-footer'>
          Already have an account?{' '}
          <Link to='/login' className='text-blue-500 hover:underline'>
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Signup;
