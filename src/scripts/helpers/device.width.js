import { useEffect, useState } from 'react';

const SCREEN = { DESKTOP: 1, MOBILE: 2 };
const WIDTH = { [SCREEN.MOBILE]: 1200 };

function deviceWidth() {

  const [device, setDevice] = useState(null);

  useEffect(() => {

    const handleResize = () => {

      const w = window.innerWidth;
      if (w > WIDTH[SCREEN.MOBILE]) { 
        setDevice(SCREEN.DESKTOP);
      } else {
        setDevice(SCREEN.MOBILE);
      }
      
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => { window.removeEventListener('resize', handleResize); };

  }, []);

  return device;

}

export { SCREEN, deviceWidth };