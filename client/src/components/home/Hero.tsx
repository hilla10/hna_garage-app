import { garageVideo } from '@constants';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='home-hero'>
      <video autoPlay muted loop playsInline className='w-screen'>
        <source src={garageVideo} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      {/* Content Overlay */}
      <div className='content'>
        {' '}
        <p>
          Working since <span className='font-bold text-red-600'>2003</span>
          <span />
        </p>
        <h1>
          Tuneup Your Car <br /> to Next Level
        </h1>
        <div className='link'>
          <Link to='service'>Explore Services</Link>{' '}
        </div>
      </div>
    </div>
  );
};

export default Hero;
