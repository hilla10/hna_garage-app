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
            We utilize the most recent symptomatic gear to ensure your vehicle
            is fixed or adjusted appropriately and in an opportune manner. We
            are an individual from Professional Auto Service, a first class
            execution arrange, where free assistance offices share shared
            objectives of being work-class car administration focuses.{' '}
          </p>
        </div>
        <div className='quality__service_right-side'>
          <img
            src={image3}
            alt='Speed meter image'
           
          />
        </div>
      </div>
    </div>
  );
};

export default QualityService;
