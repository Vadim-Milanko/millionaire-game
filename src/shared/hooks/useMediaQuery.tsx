import { useEffect, useState } from 'react';

import { DeviceType } from '@/shared/interfaces/device';

export default function useMediaQuery(): DeviceType {
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (screenWidth === null) return DeviceType.Unknown;

  if (screenWidth < 1024) return DeviceType.Mobile;

  return DeviceType.Desktop;
}
