import { Component, EventEmitter, Output } from '@angular/core';
import { Answered } from './interfaces/answered';
import { DichotomousQuestion } from './interfaces/dichotomous-question';
import { Question } from './interfaces/question';
import { data } from './samples/data';

@Component({
  selector: 'app-dichotomous-questions',
  templateUrl: './dichotomous-questions.component.html',
  styleUrls: ['./dichotomous-questions.component.scss']
})
export class DichotomousQuestionsComponent {

  file: File;
  fileContent: string;
  sampleFile: string = JSON.stringify(data);

  toggelAnim: boolean = true;
  /** The core data question sets */
  dichotomousQuestion: DichotomousQuestion = null;
  /** The current sections where `Yes` and `No` are displayed */
  currentQuestion: Question = null;
  /** The final output */
  goal: string = null;
  /** Stores answered questions */
  questionsAnswered: Answered[] = [];
  /** Can be used for parent component to trigger something like scroll to bottom */
  @Output() onAnswered = new EventEmitter();

  viewSampleData(): void {
    this.dichotomousQuestion = data;
  }

  getStarted(): void {
    this.goal = null;
    this.questionsAnswered = [];
    this.currentQuestion = this.dichotomousQuestion.question;
  }

  yes(question: Question): void {
    this.questionsAnswered.push({
      question: this.currentQuestion.value,
      value: 'yes',
      currentQuestion: this.currentQuestion
    });
    this.currentQuestion = null;

    const next = question.answer.yes.next;
    const complete = question.answer.yes.complete;

    if (next) {
      this.currentQuestion = next.question;
    }

    else if (complete) {
      this.goal = complete.text;
    }

    this.onAnswered.emit();
  }

  no(question: Question): void {
    this.questionsAnswered.push({
      question: this.currentQuestion.value,
      value: 'no',
      currentQuestion: this.currentQuestion
    });
    this.currentQuestion = null;

    const next = question.answer.no.next;
    const complete = question.answer.no.complete;

    if (next) {
      this.currentQuestion = next.question;
    }

    else if (complete) {
      this.goal = complete.text;
    }

    this.onAnswered.emit();
  }

  back(answeredQuestion: Answered): any {
    this.questionsAnswered.splice(this.questionsAnswered.length - 1, 1);
    this.currentQuestion = answeredQuestion.currentQuestion;
  }

  onFileSelect(event: Event, fileInput: HTMLInputElement): void {

    const { target } = event;
    const { files } = target as HTMLInputElement;

    this.file = files[0];

    if (!this.file.name.match(/\.(json|txt)$/i)) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsText(this.file, 'utf-8');

    fileReader.onload = ((fileLoadedEvent) => {
      const content = fileLoadedEvent.target.result as string;
      this.fileContent = content;
      this.dichotomousQuestion = JSON.parse(content);
      fileInput.value = ''; // enable re-read when uploading same file name
    });

  }

  downloadData(filename: string, data: string): void {
    // Create element <a> tag
    const download = document.createElement('a');
    download.style.display = 'none';
    // Set filename when downloading
    download.setAttribute('download', filename);
    // Set content
    download.setAttribute(
      'href',
      'data:application/json;charset=utf-8,' + encodeURIComponent(data)
    );
    // Append the element to the body
    document.body.appendChild(download);
    // Simulate click
    download.click();
    // Remove the element
    document.body.removeChild(download);
  }

}
