import { navLinks } from '@constants';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header>
      <div className='header-top'>
        {' '}
        <div className='flex-center'>
          <p className='text'>Enjoy the Beso while we fix you'r car</p>
          <p className='working-hour'>Monday - Saturday 7:00AM - 6:00PM</p>
        </div>
        <div className='max-md:hidden'>
          <p className='py-3 font-bold'>
            Schedule Appointment :{' '}
            <strong className='font-bold text-lg pl-2'>+251 99 549 1020</strong>
          </p>
        </div>
      </div>
      <nav>
        <img src='/logo.png' alt='logo' />

        <div className={` ${openMenu ? 'right-0' : '-right-full'}`}>
          <ul>
            {navLinks.map(({ id, name, href }) => (
              <li key={id} className='max-md:py-2'>
                <Link
                  to={href}
                  className='font-medium uppercase hover:text-gray-700 max-md:hover:text-red-500 '>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <div className='border-right' />
          <button>Sign In</button>
        </div>

        {openMenu ? (
          <X className='icon' onClick={() => setOpenMenu(false)} />
        ) : (
          <Menu className='icon' onClick={() => setOpenMenu(true)} />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
