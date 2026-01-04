import { MechanicExpertise } from '@components/about';
import { Leadership, WhyChooseUs, Workshop } from '@components/home';
import { AppointmentCTA, Hero } from '@components/shared';
import { aboutBg } from '@constants';

const About = () => {
  return (
    <section className='about'>
      <Hero title='About Us' bgImage={aboutBg} />
      <MechanicExpertise />
      <Workshop />
      <WhyChooseUs />
      <Leadership />
      <AppointmentCTA />
    </section>
  );
};

export default About;
