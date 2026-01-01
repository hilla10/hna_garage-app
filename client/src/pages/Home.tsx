import {
  Hero,
  QualityService,
  Services,
  WhyChooseUs,
  Workshop,
} from '@components/home';

const Home = () => {
  return (
    <section className='home'>
      <Hero />
      <Workshop />
      <Services />
      <QualityService />
      <WhyChooseUs />
    </section>
  );
};

export default Home;
