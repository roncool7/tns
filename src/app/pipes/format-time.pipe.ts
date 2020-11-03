import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTime',
})

export class FormatTimePipe implements PipeTransform {

  transform(): string {
    let countDownDate = new Date('Dec 4, 2020 00:00:00').getTime();
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (distance <= 0) {
      return "המכירה הסתיימה";
    }
    return ` זמן: ${days} ימים-${hours} שעות-${minutes} דקות-${seconds} שניות`;
  }
}
