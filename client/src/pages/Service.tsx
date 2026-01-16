import {
  AppointmentCTA,
  Hero,
  Leadership,
  Services,
  WhyChooseUs,
} from '@components/shared';
import { serviceBg } from '@constants';

const Service = () => {
  return (
    <div>
      <Hero title='' bgImage={serviceBg} />
      <Services />
      <WhyChooseUs />
      <Leadership />
      <AppointmentCTA />
    </div>
  );
};

export default Service;
