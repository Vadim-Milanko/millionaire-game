'use client';

import { useState } from 'react';
import Image from 'next/image';

import { USDFormatter } from '@/shared/utils/formatter';
import { DeviceType } from '@/shared/interfaces/device';

import useMediaQuery from '@/shared/hooks/useMediaQuery';
import useGetScoreParams from '@/shared/hooks/useGetScoreParams';

import menuIcon from 'public/menu.svg';
import closeIcon from 'public/close.svg';

import styles from './PrizeSidebar.module.css';

interface PrizeSidebarProps {
  prizeLevels: number[];
}

export default function PrizeSidebar(props: PrizeSidebarProps) {
  const { prizeLevels } = props;

  const device: DeviceType = useMediaQuery();
  const { score } = useGetScoreParams();

  const isMobile = device === DeviceType.Mobile;

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  const getSidebarStyles = () => {
    if (isMobile && !isOpen) return styles.hiddenSidebar;

    if (isMobile) {
      return styles.mobileSidebar;
    }

    return styles.sidebar;
  };

  if (device === DeviceType.Unknown) return null;

  return (
    <>
      <Image
        className={styles.toggleIcon}
        onClick={toggleSidebar}
        src={isOpen ? closeIcon : menuIcon}
        alt="toggleIcon"
      />

      <div className={getSidebarStyles()}>
        <div className={styles.list}>
          {prizeLevels.map((prize) => {
            const activeStyles = prize === score ? styles.active : '';
            const disabledStyles = prize < score ? styles.disabled : '';

            return (
              <div key={prize} className={`${styles.listItem} ${activeStyles} ${disabledStyles}`}>
                {USDFormatter(prize)}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
