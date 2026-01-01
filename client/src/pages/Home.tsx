import {
  Hero,
  QualityService,
  Services,
  WhyChooseUs,
  Workshop,
  Leadership,
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
    </section>
  );
};

export default Home;
