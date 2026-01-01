import { Hero, Services, Workshop } from '@components/home';

const Home = () => {
  return (
    <section className='home'>
      <Hero />
      <Workshop />
      <Services />
    </section>
  );
};

export default Home;
