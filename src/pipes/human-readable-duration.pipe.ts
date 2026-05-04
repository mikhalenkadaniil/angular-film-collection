import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'humanReadableDuration'
})
export class HumanReadableDurationPipe implements PipeTransform {

  transform(totalMinutes: number): string {
    if (totalMinutes <= 0) return '';

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    if (hours > 0 && minutes > 0) {
      return `${hours}h ${minutes}min`;
    }

    if (hours > 0) {
      return `${hours}h`;
    }

    return `${minutes}min`;
  }

}
