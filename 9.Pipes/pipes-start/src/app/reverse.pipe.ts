  import { Pipe, PipeTransform } from '@angular/core';

  @Pipe({
    name: 'reverse'
  })
  export class ReversePipe implements PipeTransform {

    transform(value: string){
      const splitedValue : string[] = value.split('');
      const reversedValue : string[] = splitedValue.reverse();
      return reversedValue.join('');
    }

  }
