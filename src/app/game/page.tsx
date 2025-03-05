import { Suspense } from 'react';

import PrizeSidebar from '@/app/game/components/PrizeSidebar/PrizeSidebar';
import QuestionSection from '@/app/game/components/QuestionSection/QuestionSection';

import styles from './page.module.css';
import api from '@/api/api';

const getQuestionsData = async () => {
  return api.fetchQuestionsData();
};

export default async function Game() {
  const { questions, totalQuestions, prizeLevels } = await getQuestionsData();

  return (
    <div className={styles.page}>
      <QuestionSection questions={questions} totalQuestions={totalQuestions} />

      <Suspense>
        <PrizeSidebar prizeLevels={prizeLevels} />
      </Suspense>
    </div>
  );
}
