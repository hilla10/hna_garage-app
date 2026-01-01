import { image1, image2 } from '@constants';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Workshop = () => {
  return (
    <div className='workshop'>
      <div className='md:flex items-start gap-x-15'>
        {/* Left side */}
        <div className='left-side'>
          <div>
            <img src={image1} alt='Engine oil pouring' />
          </div>
          <div className='relative'>
            <img src={image2} alt='Wheel hub bearing assembly' />
            <div className='left-card'>
              <h1>23</h1>
              <p>Years Experience</p>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className='right-side'>
          <h5>Welcome to Our workshop</h5>
          <h2>We have 23 years experience</h2>
          <div className='w-15 bg-red-500 h-0.5 mb-2 ' />
          <p className='pb-4'>
            Bring to the table win-win survival strategies to ensure proactive
            domination. At the end of the day. going forward, a new normal that
            has evolved from generations HNA GARAGE is on the runway heading
            towards a streamlined cloud solution. User generated content in
            real-time will have multiple touch points for offshoring.
          </p>
          <p>
            Capitalize on low hanging fruit to identify a ballpark value added
            activity to beta test. Override the digital divide with additional
            click throughs from DevOps. Nanotechnology immersion along the
            information highway will close the loop on focusing
          </p>

          <Link to='about'>
            <span> About Us</span> <ArrowRight />{' '}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Workshop;
