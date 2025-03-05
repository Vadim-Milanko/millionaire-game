'use client';

import { Suspense } from 'react';
import { useRouter } from 'next/navigation';

import ActionButton from '@/shared/components/ActionButton/ActionButton';
import { USDFormatter } from '@/shared/utils/formatter';
import { ROUTES } from '@/shared/constants/routes';
import useGetScoreParams from '@/shared/hooks/useGetScoreParams';

import styles from './TotalScore.module.css';

export default function TotalScore() {
  const router = useRouter();

  const { score } = useGetScoreParams();

  const handleNavigateToGame = () => {
    router.push(ROUTES.GAME);
  };

  return (
      <Suspense>
          <div className={styles.text}>
              <p className={styles.title}>Total score:</p>

              <p className={styles.score}>{USDFormatter(score)} earned</p>

              <ActionButton title="Try again" onBtnClick={handleNavigateToGame}/>
          </div>
      </Suspense>
  );
}
