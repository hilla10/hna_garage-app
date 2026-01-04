import {
  Hero,
  QualityService,
  Services,
  WhyChooseUs,
  Workshop,
  Leadership,
} from '@components/home';
import { AppointmentCTA } from '@components/shared';

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
