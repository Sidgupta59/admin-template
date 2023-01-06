import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, searchTerm: any) {
    return searchTerm ? items.filter((item: any) => item.toString().toUpperCase().indexOf(searchTerm.toUpperCase()) !== -1) : items;
  }
}
