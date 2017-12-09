import { Question } from './question';

export class Test {
    idtests: number;
    materie: string;
    title: string;
    date: Date;
    questions: Question[];

    constructor(title, materie, date) {
        this.title = title;
        this.materie = materie;
        this.date = date;
    }
}
