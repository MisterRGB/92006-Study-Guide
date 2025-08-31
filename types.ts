
export enum AppView {
  HEURISTICS,
  MATAPONO_MAORI,
  QUIZ,
  CASE_STUDY,
}

export interface Principle {
  id: number;
  title: string;
  description: string;
  example: string;
}

export interface QuizQuestion {
  id: number;
  questionText: string;
  image?: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}