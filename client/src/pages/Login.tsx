import { Link } from "react-router-dom";
import { google, github } from "@constants";
import { Eye ,EyeOff } from 'lucide-react';
import {useState} from 'react';
const Login = () => {
    const [showPassword,setShowPassword] = useState(false)
  return (
    <section className="auth-page">
      <div className="auth-card">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h2>
            Welcome back
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Login to your account
          </p>
        </div>

        {/* Social Login */}
        <div className="auth-social-btn">
          <button >
            <img src={google} alt="Google" />
            Continue with Google
          </button>

          <button>
            <img src={github} alt="GitHub" />
            Continue with GitHub
          </button>
        </div>

        {/* Divider */}
        <div className='auth-divider'>
          <div  />
          <span>
            or
          </span>
          <div  />
        </div>

        {/* Login Form */}
        <form>
          <div>
            <label>
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
             
            />
          </div>

         <div className='relative'>
            <label>
              Password
            </label>
            <input
              type={showPassword ? 'text': 'password'}
              placeholder="••••••••"
             
            />
          {
            showPassword ?   <Eye className='icon' onClick={()=>setShowPassword(false)}/> :  <EyeOff className='icon'  onClick={()=>setShowPassword(true)}/>
          }
           
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="submit"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="auth-footer">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
