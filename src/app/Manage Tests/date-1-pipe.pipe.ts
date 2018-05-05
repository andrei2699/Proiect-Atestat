import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date1Pipe'
})
export class Date1PipePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let values = value.split('-');
    let month = +values[1] + 1;
    let str = "" + month;
    if (month < 10) {
      str = "0" + month;
    }
    return values[0] + '-' + str + '-' + values[2];
  }
}
