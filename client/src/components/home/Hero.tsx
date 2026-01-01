import { garageVideo } from '@constants';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className='hero relative'>
      <video autoPlay muted loop className='w-screen'>
        <source
          src={garageVideo}
          type='video/mp4'
          className='size-full block'
        />
      </video>

      {/* Content Overlay */}
      <div className=' content'>
        <p className='text-lg'>
          Working since <span className='font-bold text-red-600'>2003</span>
          <span />
        </p>
        <h1>
          Tuneup Your Car <br /> to Next Level
        </h1>

        <button aria-label='Play intro video'>
          <Link to='service'> Explore Services</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
