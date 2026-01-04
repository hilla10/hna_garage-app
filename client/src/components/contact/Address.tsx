import { address } from '@constants';

const Address = () => {
  return (
    <div className='address'>
      <div>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.0078216215447!2d38.759284474101776!3d9.061217788485674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8fd2e0da282d%3A0x2456b096bb79c49b!2zU2hpcm9tZWRhIEJ1cyBTdG9wIHwg4Yi94YiuIOGInOGLsyDhiqDhibbhiaLhiLUg4Yib4YmG4Yur!5e1!3m2!1sen!2set!4v1767455732841!5m2!1sen!2set'
          title='Shiromeda Bus Stop location map'
          width='100%'
          height='450'
          loading='eager'
          referrerPolicy='no-referrer-when-downgrade'></iframe>

        <div className='w-100'>
          <h1>Our Address</h1>
          <p>
            HNA Garage — Shiromeda Bus Stop Open Mon–Fri 08:00–18:00, Sat
            09:00–14:00. Call +251 99 549 1020 or email contact@hna.com. Free
            on-site parking; arrive via Main St.
          </p>

          <div>
            {address.map(({ id, title, name, icon: Icon, phone }) => (
              <div key={id} className='flex items-center gap-4 pb-4'>
                <Icon className='size-10 text-red-500' />
                <div>
                  <h4>{title}:</h4>
                  <p>
                    <span> {name}</span> {phone && phone}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
