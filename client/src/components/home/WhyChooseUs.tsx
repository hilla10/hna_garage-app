import { aboutUs, additionalServices, image4 } from '@constants';

const WhyChooseUs = () => {
  return (
    <div className='why-us'>
      <div>
        <div className='left-side'>
          <h2>
            Why Choose Us <span />
          </h2>

          <p className='text'>
            Bring to the table win-win survival strategies to ensure proactive
            domination. At the end of day, going forward, a new normal that has
            evolved from generation heading towards.
          </p>
          <ul>
            {aboutUs.map(({ id, title, image }) => (
              <li key={id}>
                <img src={image} alt={title} />
                <p>{title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className='right-side'>
          <h2>
            Additional Services <span />
          </h2>
          <div>
            <img src={image4} alt='car image' />

            <ul>
              {additionalServices.map(({ id, icon, text }) => (
                <li key={id}>
                  {' '}
                  <img src={icon} alt='check icon' />
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
