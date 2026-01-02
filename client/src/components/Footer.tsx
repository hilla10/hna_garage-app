import { contactInfo, footerLink, services, socialLinks } from '@constants';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className='footer-container'>
        <div className='grid'>
          {contactInfo.map(({ id, name, icon: Icon, phone }) => (
            <div key={id}>
              <Icon className='icon' />
              <p>
                {name}{' '}
                {phone && (
                  <strong className='font-bold text-xl max-[321px]:text-lg'>
                    {phone}
                  </strong>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className='footer-link'>
        <p className='text'>
          Capitalize on low hanging fruit to identify a ballpark value added
          activity to beta test. Override the digital divide additional
          clickthroughs.
        </p>
        <div>
          <h3>Useful Links</h3>
          <ul>
            {footerLink.map(({ id, name, href }) => (
              <li key={id} className='pb-3'>
                <Link to={href}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Our Services</h3>
          <ul>
            {services.map(({ id, name, href }) => (
              <li key={id} className='pb-3'>
                <a href={href}>{name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className='social-links'>
          <h3>Newsletter</h3>
          <p>Get latest updates and offers.</p>
          <ul>
            {socialLinks.map(({ id, icon: Icon, link }) => (
              <li key={id}>
                <a href={link} target='_blank'>
                  <Icon className='size-5' />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className='copyright-text'>
        © Copyright HNA Garage {year} . All right reserved.
      </p>
    </footer>
  );
};

export default Footer;
