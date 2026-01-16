import { Link } from 'react-router-dom';
import { google, github } from '@constants';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section className='auth-page'>
      <div className='auth-card'>
        {/* Header */}
        <div className='text-center mb-6'>
          <h2>Welcome back</h2>
          <p className='text-sm text-gray-500 mt-1'>Login to your account</p>
        </div>

        {/* Social Login */}
        <div className='auth-social-btn'>
          <button>
            <img src={google} alt='Google' />
            Continue with Google
          </button>

          <button>
            <img src={github} alt='GitHub' />
            Continue with GitHub
          </button>
        </div>

        {/* Divider */}
        <div className='auth-divider'>
          <div />
          <span>or</span>
          <div />
        </div>

        {/* Login Form */}
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor='email'>Email</label>
            <input id='email' type='email' placeholder='you@example.com' />{' '}
          </div>
          <div className='relative'>
            <label htmlFor='password'>Password</label>
            <input
              id='password'
              type={showPassword ? 'text' : 'password'}
              placeholder='••••••••'
            />
            <button
              type='button'
              className='icon'
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}>
              {/* {showPassword ? <Eye /> : <EyeOff />} */}
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
          {/* Submit */}
          <button type='submit' className='submit'>
            Log in
          </button>{' '}
        </form>

        {/* Footer */}
        <p className='auth-footer'>
          Don&apos;t have an account?{' '}
          <Link to='/signup' className='text-blue-500 hover:underline'>
            Create one
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
