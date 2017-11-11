import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'deleteCapital'})

export class DeleteCapitalPipe implements PipeTransform {
    transform(info: string): string {
        let loc=info.indexOf(']',2);
      return  info.substring(loc+1);
    }
  }