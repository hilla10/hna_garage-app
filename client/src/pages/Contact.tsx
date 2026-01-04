import { Address } from '@components/contact';
import { AppointmentCTA, Hero } from '@components/shared';
import { contactBg } from '@constants';

const Contact = () => {
  return (
    <section className='contact'>
      <Hero title='Contact Us' bgImage={contactBg} />
      <Address />
      <AppointmentCTA />
    </section>
  );
};

export default Contact;
