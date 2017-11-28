import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-elevresult',
  templateUrl: './elevresult.component.html',
  styleUrls: ['./elevresult.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ElevresultComponent implements OnInit {

  constructor (private _myService: DataService){
    console.log(this._myService.getData());
  }

  ngOnInit() {
  }

}

