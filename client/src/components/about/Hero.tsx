import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className='hero'>
      <div className='content'>
        {' '}
        <h1>About Us</h1>
        <h5>
          <span>Home </span> <ChevronRight /> About Us
        </h5>
      </div>
    </div>
  );
};

export default Hero;
