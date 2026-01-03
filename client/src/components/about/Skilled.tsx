import { image5 } from '@constants';

const Skilled = () => {
  return (
    <div className='max-w-237.5 mx-auto max-lg:max-w-full max-lg:mx-10 pt-20 flex max-lg:flex-col items-center gap-9'>
      <div className='lg:w-167.5 '>
        <h3 className='text-3xl font-bold pb-3 text-dark-blue '>
          We are highly skilled mechanics for you car repair
        </h3>
        <p className='text-gray-500 text-sm font-medium pb-4 leading-6.5'>
          Bring to the table win-win survival strategies to ensure proactive
          domination. At the end of the day, going forward, a new normal that
          has evolved from generation X is on the runway heading towards a
          streamlined cloud solution. User generated content in real-time will
          have multiple touchpoints for offshoring
        </p>

        <p className='text-gray-500 text-sm font-medium pb-4 leading-6.5'>
          Capitalize on low hanging fruit to identify a ballpark value added
          activity to beta test. Override the digital divide with additional
          clickthroughs from DevOps. Nanotechnology immersion along the
          information heading towards a streamlined cloud solution User
          generated content in real-time will have multiple
        </p>
      </div>
      <div>
        <img src={image5} alt='tire image' />
      </div>
    </div>
  );
};

export default Skilled;
