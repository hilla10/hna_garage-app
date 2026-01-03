import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className='hero'>
      <div className='content'>
        {' '}
        <h1>About Us</h1>
        <nav aria-label='breadcrumb'>
          <ol className='breadcrumb'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <ChevronRight aria-hidden='true' />
            </li>
            <li aria-current='page'>About Us</li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Hero;
