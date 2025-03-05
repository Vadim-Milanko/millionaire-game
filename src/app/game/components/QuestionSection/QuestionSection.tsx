'use client';

import { useState } from 'react';

import { Question, Option } from '@/shared/interfaces/game';

import { useRouter } from 'next/navigation';
import gameConfig from '@/data/config.json';
import { ROUTES } from '@/shared/constants/routes';

import styles from './QuestionSection.module.css';

export default function QuestionSection() {
  const router = useRouter();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const question = gameConfig.questions[currentQuestion];

  const handleAnswer = (answerId: string) => () => {
    const question: Question = gameConfig.questions[currentQuestion];
    const selectedOption = question.options.find((opt) => opt.id === answerId);

    if (selectedOption && selectedOption.isCorrect) {
      setScore(question.prize);

      router.push(`${ROUTES.GAME}?score=${question.prize}`);

      if (currentQuestion !== gameConfig.totalQuestions - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        router.push(`${ROUTES.FINAL_SCREEN}?score=${question.prize}`);
      }

      return;
    }

    router.push(`${ROUTES.FINAL_SCREEN}?score=${score}`);
  };

  return (
    <div className={styles.questionSection}>
      <h2 className={styles.question}>{question.text}</h2>

      <div className={styles.answersWrap}>
        {question.options.map((option: Option) => (
          <div key={option.id} className={styles.answer} onClick={handleAnswer(option.id)}>
            <span className={styles.option}>{option.id}</span>

            {option.text}
          </div>
        ))}
      </div>
    </div>
  );
}
