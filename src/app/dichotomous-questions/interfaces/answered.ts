import { Question } from "./question";

export interface Answered {
    question: string;
    value: 'yes' | 'no';
    /** To store the current question during it was asked */
    currentQuestion: Question;
}