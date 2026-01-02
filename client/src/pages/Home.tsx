import {
  Hero,
  QualityService,
  Services,
  WhyChooseUs,
  Workshop,
  Leadership,
  AppointmentCTA
} from '@components/home';

const Home = () => {
  return (
    <section className='home'>
      <Hero />
      <Workshop />
      <Services />
      <QualityService />
      <WhyChooseUs />
      <Leadership />
      <AppointmentCTA/>
    </section>
  );
};

export default Home;
