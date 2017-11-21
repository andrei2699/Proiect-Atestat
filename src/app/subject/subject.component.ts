import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SubjectComponent implements OnInit {

   constructor(
    private router: Router){}
   
   ngOnInit(){};


show(a:string) { 
    let e =  document.getElementById(a).getElementsByTagName("button");
for(let i=0;i<=1;i++){
    e[i].style.display = "initial";
    }
}
hide(a:string) { 
let e =  document.getElementById(a).getElementsByTagName("button");
  for(let i=0;i<=1;i++){
     e[i].style.display = "none"; 
    }
}

GoTo(a :string){
    this.router.navigateByUrl('/'+a);
}
}
