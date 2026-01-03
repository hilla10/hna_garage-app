import { Hero, MechanicExpertise } from '@components/about';
import {
  AppointmentCTA,
  Leadership,
  WhyChooseUs,
  Workshop,
} from '@components/home';

const About = () => {
  return (
    <section className='about'>
      <Hero />
      <MechanicExpertise />
      <Workshop />
      <WhyChooseUs />
      <Leadership />
      <AppointmentCTA />
    </section>
  );
};

export default About;
