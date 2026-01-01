import { Hero, QualityService, Services, Workshop } from '@components/home';

const Home = () => {
  return (
    <section className='home'>
      <Hero />
      <Workshop />
      <Services />
      <QualityService />
    </section>
  );
};

export default Home;
