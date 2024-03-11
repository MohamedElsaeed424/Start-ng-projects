import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter' ,
  pure : false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filteredStatus : string , filterProperty : string) {
    if ( value.length === 0 ||  filteredStatus=== ''){
      return value ;
    }
    Array
    const resultArray = [] ;
    for( const item of value){
      if (item[filterProperty] === filteredStatus){
        resultArray.push(item);
      }
    }
    return resultArray ;
  }

}
