import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { CalendarDay } from 'src/app/models/CalendarDay'

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.scss'],
})
export class CalendarDayComponent implements OnInit {
  @Input() day: CalendarDay
  @Input() selectedDay: number
  @Output() clickedDay = new EventEmitter<number>()

  dayNames: Array<String> = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  constructor() {}

  ngOnInit(): void {
    console.warn(this.clickedDay)
  }

  setDotClass(): object {
    let classes = {
      dot: true,
      redDot: this.day.isRejected,
      greenDot: this.day.isApproved,
      greyDot: !this.day.isRejected && this.day.isApproved,
      noDot: !this.day.tasksCount,
    }

    return classes
  }

  returnDayClass(x: number): object {
    let currentDate = new Date()
    let classes = {
      selectedDay: x + 1 === this.selectedDay,
      today: x + 1 === currentDate.getUTCDate(),
    }

    return classes
  }

  setClickedDay(x: any): void {
    this.clickedDay.emit(x + 1)
  }
}
