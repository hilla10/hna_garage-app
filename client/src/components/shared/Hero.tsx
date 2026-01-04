import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProp {
  title: string;
  bgImage: string;
}

const Hero = ({ title, bgImage }: HeroProp) => {
  return (
    <div className='hero'>
      <img src={bgImage} alt={`${title} hero banner`} />{' '}
      <div className='content'>
        <h1>{title}</h1>
        <nav aria-label='breadcrumb'>
          <ol className='breadcrumb'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <ChevronRight aria-hidden='true' />
            </li>
            <li aria-current='page'>{title}</li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Hero;
