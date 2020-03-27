import { Component, OnInit, Input } from '@angular/core'
import { CalendarDay } from 'src/app/models/CalendarDay'
import { CalendarService } from '../../services/calendar.service'

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  days: Array<CalendarDay>
  selectedDay: number

  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {
    this.days = this.calendarService.getWeek()
    console.log(this.days)
  }

  onDayClick(x: any):void {
    this.calendarService.setClickedDayGlobal(x)
  }

  currentMonthYear(): string {
    return `${
      this.calendarService.fullMonthNames[this.days[0].date.getMonth()]
    }   ${this.days[0].date.getFullYear()}`
  }

  goToToday(): void {
    this.calendarService.setToday()
  }


}
