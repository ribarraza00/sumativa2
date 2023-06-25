import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'availableNow'
})
export class AvailableNowPipe implements PipeTransform {
  transform(value: string): string {
    if (value.trim() === '') {
      return 'Available Now!';
    } else {
      return value;
    }
  }
}
