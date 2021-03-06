import { Pipe, PipeTransform } from '@angular/core';

// Decorator
@Pipe({
  name: 'ellipsis' // name of the pipe
})
export class EllipsisPipe implements PipeTransform {

  // mandatorily return something 
  transform(value: string, ...args: any[]): string {
    console.log(value);
    console.log(args); 
    value = value.substring(0, args[0]);
    return value + '...';
  }

}
