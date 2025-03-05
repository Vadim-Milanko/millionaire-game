import Image from 'next/image';

import TotalScore from '@/app/finalScreen/components/TotalScore/TotalScore';

import handImg from '../../../public/hand.svg';

import styles from './page.module.css';

export default function FinalScreen() {
  return (
    <div className={styles.background}>
      <div className={styles.contentWrap}>
        <Image src={handImg} width={624} height={367} layout="responsive" alt="My Icon" />

        <TotalScore />
      </div>
    </div>
  );
}
