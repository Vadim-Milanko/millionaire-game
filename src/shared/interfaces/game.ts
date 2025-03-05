export interface QuestionsData {
  questions: Question[];
  totalQuestions: number;
  prizeLevels: number[];
}

export interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
  prize: number;
}
