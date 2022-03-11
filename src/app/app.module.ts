import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
// import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { DichotomousQuestionsComponent } from './dichotomous-questions/dichotomous-questions.component';

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule } from "@angular/material/badge";
import { HeaderComponent } from './dichotomous-questions/components/header/header.component';
import { QuestionComponent } from './dichotomous-questions/components/question/question.component';
import { FooterComponent } from './dichotomous-questions/components/footer/footer.component';
import { AnsweredComponent } from './dichotomous-questions/components/answered/answered.component';

@NgModule({
  declarations: [
    AppComponent,
    DichotomousQuestionsComponent,
    HeaderComponent,
    QuestionComponent,
    FooterComponent,
    AnsweredComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatBadgeModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    // {
    //   provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
    //   useValue: SNACKBAR_CONFIG
    // },
    // {
    //   provide: MAT_DIALOG_DEFAULT_OPTIONS,
    //   useValue: DIALOG_CONFIG
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
