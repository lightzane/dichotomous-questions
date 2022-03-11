import { DichotomousQuestion } from "../interfaces/dichotomous-question";

export const data: DichotomousQuestion = {
  goal: "To guide myself when to sleep",
  question: {
    value: "Are you tired?",
    answer: {
      yes: {
        next: {
          question: {
            value: "Are you sleepy?",
            answer: {
              yes: {
                complete: { text: "Go to bed and have a good sleep!" },
              },
              no: {
                complete: { text: "Do something else that will make you fell asleep" },
              },
            },
          },
        },
      },
      no: {
        next: {
          question: {
            value: "Did you brush your teeth?",
            answer: {
              yes: {
                next: {
                  question: {
                    value: "Have you washed your face?",
                    answer: {
                      yes: {
                        next: {
                          question: {
                            value: "Do you want to watch movies before going to sleep?",
                            answer: {
                              yes: { complete: { text: "Watch some good movies then!" } },
                              no: {
                                next: {
                                  question: {
                                    value: "Do you want to just read books?",
                                    answer: {
                                      yes: {
                                        complete: { text: "Read good books!" },
                                      },
                                      no: {
                                        complete: { text: "I dont read what you want anymore" },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                      no: { complete: { text: "Go wash your face" } },
                    },
                  },
                },
              },
              no: {
                complete: { text: "Brush your teeth and make them happy!" },
              },
            },
          },
        },
      },
    },
  },
};
