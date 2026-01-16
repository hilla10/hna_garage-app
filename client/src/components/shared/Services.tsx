import { services } from '@constants';

const Services = () => {
  return (
    <div className='services'>
      <div className='service-container'>
        <h1>
          Our Services <div />
        </h1>
        <p className='text'>
          Bring to the table win-win survival strategies to ensure proactive
          domination. At the end of the day, going forward, a new normal that
          has evolved from generation X is on the runway heading towards a
          streamlined cloud solution.{' '}
        </p>

        <div className='grid'>
          {services.map(({ id, name, category, href, linkText, image }) => (
            <div key={id} className='bg-white rounded-lg'>
              <div className='pb-8 pt-6 px-6'>
                <p>{category}</p>
                <h4>{name}</h4>
              </div>
              <div className='flex-between px-6 pb-4'>
                <a href={href}>{linkText}</a>
                <img src={image} alt={name} />
              </div>{' '}
              <div className='w-full h-1 bg-red-500 rounded-bl-lg rounded-br-lg' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
