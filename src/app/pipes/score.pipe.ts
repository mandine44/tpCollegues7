import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(scoreCollegue: number): string {
    if(scoreCollegue > 0) {
      return '+ ' + scoreCollegue;
    }
    if(scoreCollegue < 0) {
      return '- ' + Math.abs(scoreCollegue);
    }
    return '0';
  }

}
