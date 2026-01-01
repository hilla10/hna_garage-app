import { play } from '@constants';

const Leadership = () => {
  return (
    <div className='leadership relative'>
      {/* Content Overlay */}
      <div className='content'>
        <p>
          Working since <span className='font-bold text-red-600'>2003</span>
          <span />
        </p>
        <h1>
          We are leaders <br /> in Car Mechanical Work
        </h1>
        <div className='link'>
          <button>
            <img src={play} alt='play icon' />
          </button>
          <span>
            Watch a video <br /> about us
          </span>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
