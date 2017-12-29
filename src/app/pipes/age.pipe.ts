import { Pipe, PipeTransform } from '@angular/core';

/* Pipe to return the age of the visitor */

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return args - value;
  }

}
