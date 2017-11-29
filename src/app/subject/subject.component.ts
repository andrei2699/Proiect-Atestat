import { Component, OnInit,Input, ViewEncapsulation } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { subject } from '../subject'

@Component({
    selector: 'app-subject',
    templateUrl: './subject.component.html',
    styleUrls: ['./subject.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class SubjectComponent implements OnInit {

    constructor(private router: Router) { }
    
    ngOnInit() { }
    SharedData: string;

    @Input()
    subject;

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
        this.SharedData = a;
        this.router.navigateByUrl('test');
    }
}
