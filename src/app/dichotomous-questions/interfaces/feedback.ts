import { DichotomousQuestion } from "./dichotomous-question";

export interface Feedback {
    next?: DichotomousQuestion;
    complete?: {
        text: string;
    };
}