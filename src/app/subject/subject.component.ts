import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { subject } from '../subject'
import { DataService } from '../data.service';

@Component({
    selector: 'app-subject',
    templateUrl: './subject.component.html',
    styleUrls: ['./subject.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class SubjectComponent implements OnInit {

    constructor(private _myService: DataService,
        private router: Router) { }
    subjects = ['Informatica', 'Geografie', 'Matematica', 'Biologie', 'Chimie', 'Fizica', 'Engleza', 'Franceza', 'Romana', 'Istorie'];
    ngOnInit() { }
    SharedData: string;

    show(a: string) {
        let e = document.getElementById(a).getElementsByTagName('button');
        for (let i = 0; i <= 1; i++) {
            e[i].style.display = 'initial';
        }
    }
    hide(a: string) {
        let e = document.getElementById(a).getElementsByTagName('button');
        for (let i = 0; i <= 1; i++) {
            e[i].style.display = 'none';
        }
    }

    GoTo(a: string) {
        this._myService.setData(a);
        this.SharedData = a;
        console.log(this._myService.getData());
        this.router.navigateByUrl('test');
    }
}
