import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AppointmentCTA = () => {
  return (
    <div className='appointment-cta'>
      <div className='appointment-container'>
        <div>
          <h4>Schedule Your Appointment Today</h4>
          <p>Your Automotive Repair & Maintenance Service Specialist</p>
        </div>
        <div className='phone-number'>
          <a href='tel:+251995491020'>+251.99.549.1020</a>
        </div>{' '}
        <Link to='/contact' className='btn'>
          Contact Us
          <ArrowRight className='size-5' />
        </Link>
      </div>
    </div>
  );
};

export default AppointmentCTA;
