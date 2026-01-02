import { image3 } from '@constants';

const QualityService = () => {
  return (
    <div className='quality-service'>
      <div className='quality__service_container'>
        <div className='quality__service_left-side'>
          <h3>
            Quality Service And <br /> Customer Satisfaction !!
          </h3>
          <p>
            We utilize the most recent diagnostic equipment to ensure your
            vehicle is fixed or serviced properly and in a timely manner. We are
            a member of Professional Auto Service, a first-class performance
            network, where independent service facilities share the goal of
            being world-class automotive service centers.{' '}
          </p>{' '}
        </div>
        <div className='quality__service_right-side'>
          <img src={image3} alt='Speed meter image' />
        </div>
      </div>
    </div>
  );
};

export default QualityService;
