'use client';

import { useRouter } from 'next/navigation';

import ActionButton from '@/shared/components/ActionButton/ActionButton';
import { ROUTES } from '@/shared/constants/routes';

import styles from './StartGame.module.css';

export default function StartGame() {
  const router = useRouter();

  const handleNavigateToGame = () => {
    router.push(ROUTES.GAME);
  };

  return (
    <div className={styles.text}>
      <h1 className={styles.title}>Who wants to be a millionaire?</h1>

      <ActionButton title="Start" onBtnClick={handleNavigateToGame} />
    </div>
  );
}
