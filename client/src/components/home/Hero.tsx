// import { Play } from 'lucide-react';

import { play } from '@constants';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='content'>
        <p>
          Working since <span className='font-bold '>2003 </span>
          <span />
        </p>
        <h1>
          Tuneup Your Car <br /> to Next Level
        </h1>
        <div className='flex gap-4'>
          <div className='play'>
            <img src={play} alt='play icon' className='size-8' />
          </div>
          <p className='text-base uppercase'>
            Watch intro video <br /> about us
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
