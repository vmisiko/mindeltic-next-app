export interface Feedback {
  id: string;
  psychologistId: string;
  summary: string;
}

export interface Psychologist {
  id: string;
  name: string;
  url: string;
  averageScore: number;
  feedbacks: Feedback[];
}
