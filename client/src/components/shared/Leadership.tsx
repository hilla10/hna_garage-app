import { useEffect, useState } from 'react';
import { play, automotiveVideo } from '@constants';
import { X } from 'lucide-react';

const Leadership = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (!showVideo) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowVideo(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [showVideo]);

  return (
    <div className='leadership relative'>
      {/* Content Overlay */}
      <div className='content'>
        <p>
          Working since <span className='font-bold text-red-600'>2003</span>
          <span />
        </p>
        <h1>
          We are leaders <br /> in Car Mechanical Work
        </h1>
        <div className='link'>
          <button
            aria-label='Watch about us video'
            onClick={() => setShowVideo(true)}
            className='play-button'>
            <img src={play} alt='play icon' />
          </button>
          <span>
            Watch a video <br /> about us
          </span>
        </div>
      </div>
      {showVideo && (
        <div
          role='dialog'
          aria-modal='true'
          onClick={(e) => e.target === e.currentTarget && setShowVideo(false)}
          className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4'>
          <div className='relative w-full max-w-3xl'>
            <button
              ref={(el) => el?.focus()}
              aria-label='Close video'
              onClick={() => setShowVideo(false)}
              className='absolute right-2 top-2 z-10 rounded bg-white/80 p-2 text-black'>
              <X />
            </button>
            <video
              src={automotiveVideo}
              controls
              autoPlay
              playsInline
              className='w-full rounded bg-black'
            />
          </div>
        </div>
      )}{' '}
    </div>
  );
};

export default Leadership;
