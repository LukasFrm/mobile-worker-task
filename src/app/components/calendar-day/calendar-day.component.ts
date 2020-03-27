import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { CalendarDay } from 'src/app/models/CalendarDay'
import { CalendarService } from '../../services/calendar.service'
import { ClassField } from '@angular/compiler'

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.scss'],
})
export class CalendarDayComponent implements OnInit {
  @Input() day: CalendarDay
  @Input() selectedDay: number

  dayNames: Array<String> = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  constructor(public calendarService: CalendarService) {}

  ngOnInit(): void {}

  calcWorkTime(date1: Date, date2: Date): string {
    let diff = Math.abs(date1.getTime() - date2.getTime())
    let hourDiff = diff / 1000 / 3600
    let negativeRounded = Math.floor(hourDiff)
    return `${negativeRounded}:00`
  }

  setDotClass(): object {
    let classes = {
      dot: true,
      redDot: this.day.isRejected,
      greenDot: this.day.isApproved,
      greyDot:
        this.day.tasksCount && !this.day.isApproved && !this.day.isRejected,
      noDot: !this.day.tasksCount,
    }
    return classes
  }

  setDayClass(x: number): object {
    let classes = {
      selectedDay: x + 1 === new Date(this.calendarService.clickedDateObj.date).getUTCDate() + 1,
      today: x + 1 === new Date().getUTCDate(),
    }
    return classes
  }
}
