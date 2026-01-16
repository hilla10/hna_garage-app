import { Link } from "react-router-dom";
import { google, github } from "@constants";
import { Eye ,EyeOff } from 'lucide-react';
import {useState} from 'react';

const Signup = () => {
    const [showPassword,setShowPassword] = useState(false)
    const [showConfirmPassword,setShowConfirmPassword] = useState(false)
  return (
    <section className="auth-page">
      <div className="auth-card">

        {/* Header */}
        <div className="text-center mb-6">
          <h2>
            Create an account
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Get started in just a few seconds
          </p>
        </div>

        {/* Social Signup */}
        <div className="auth-social-btn">
          <button>
            <img src={google} alt="Google" className="w-5 h-5" />
            Continue with Google
          </button>

          <button>
            <img src={github} alt="GitHub" className="w-5 h-5" />
            Continue with GitHub
          </button>
        </div>

        {/* Divider */}
        <div className=" auth-divider">
          <div/>
          <span>or</span>
          <div/>
        </div>

        {/* Signup Form */}
        <form>

          <div>
            <label>
              Username
            </label>
            <input
              type="text"
              placeholder="John Doe"
             
            />
          </div>

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

          <div className='relative'>
            <label>
              Confirm Password
            </label>
            <input
                type={showConfirmPassword ? 'text': 'password'}
              placeholder="••••••••"
             
            />
              {
            showConfirmPassword ?   <Eye className='icon' onClick={()=>setShowConfirmPassword(false)}/> :  <EyeOff className='icon'  onClick={()=>setShowConfirmPassword(true)}/>
          }
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="submit"
          >
            Create account
          </button>
        </form>

        {/* Terms */}
        <p className="auth-terms">
          By signing up, you agree to our{" "}
          <span className="underline cursor-pointer">Terms</span> &{" "}
          <span className="underline cursor-pointer">Privacy Policy</span>
        </p>

        {/* Footer */}
        <p className="auth-footer">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Signup;
