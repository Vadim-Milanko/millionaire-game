import { Suspense } from 'react';

import PrizeSidebar from '@/app/game/components/PrizeSidebar/PrizeSidebar';
import QuestionSection from '@/app/game/components/QuestionSection/QuestionSection';

import styles from './page.module.css';

export default function Game() {
  return (
    <div className={styles.page}>
      <QuestionSection />

      <Suspense>
        <PrizeSidebar />
      </Suspense>
    </div>
  );
}
