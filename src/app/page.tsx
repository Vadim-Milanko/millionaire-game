import Image from 'next/image';

import StartGame from '@/app/components/StartGame/StartGame';

import handImg from 'public/hand.svg';

import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.pageBg}>
      <div className={styles.contentWrap}>
        <Image src={handImg} layout="responsive" alt="hand" />

        <StartGame />
      </div>

      <div className={styles.additionalPageBg} />
    </div>
  );
}
