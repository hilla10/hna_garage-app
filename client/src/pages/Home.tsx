import { Hero, QualityService, Workshop } from '@components/home';
import {
  AppointmentCTA,
  Leadership,
  WhyChooseUs,
  Services,
} from '@components/shared';

const Home = () => {
  return (
    <section className='home'>
      <Hero />
      <Workshop />
      <Services />
      <QualityService />
      <WhyChooseUs />
      <Leadership />
      <AppointmentCTA />
    </section>
  );
};

export default Home;
