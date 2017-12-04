export class Question {
    text: string;
    answer1;
    answer2;
    answer3;
    answer4;
    answer5;
    answer6;
    correct;
    points;

    constructor(t, a1, a2, a3, a4, a5, a6, c, p = 1) {
        this.text = t;
        this.answer1 = a1;
        this.answer2 = a2;
        this.answer3 = a3;
        this.answer4 = a4;
        this.answer5 = a5;
        this.answer6 = a6;
        this.correct = c;
        this.points = p;
    }
}