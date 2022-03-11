import { Question } from "./question";

export interface DichotomousQuestion {
    goal?: string;
    question: Question;
}