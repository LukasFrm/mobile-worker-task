import { Component, OnInit, Input } from '@angular/core'
import { CalendarDay } from 'src/app/models/CalendarDay'

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  days: Array<CalendarDay>
  selectedDay: number
  constructor() {}

  ngOnInit(): void {
    this.generateWeekData()
    this.days = this.generateWeekData().reverse()
  }

  handleValueChange(date) {
    this.selectedDay = date
  }

  generateWeekData(): Array<CalendarDay> {
    let arr = []
    let date = new Date()
    let thisYear = date.getFullYear()
    let thisMonth = date.getMonth()
    let thisDayNo = date.getUTCDate()

    for (let i = 0; i < 7; i++) {
      let whenEven = i % 2 === 0
      arr[i] = {
        date: new Date(thisYear, thisMonth, thisDayNo - i),
        // Work amount in 30min chunks --> 12 work hours * 0,5 hr chunks = 24
        quantity: Math.floor(Math.random() * (24 + 1)),
        price: 13,
        eventType: 'string',
        isExpenseType: whenEven,
        isHoursEventType: whenEven,
        isAdditionalHoursEventType: whenEven,
        isWorkHour: whenEven,
        isApproved: whenEven,
        isRejected: !whenEven,
        tasksCount: Math.random() * Math.floor(5),
        firstTaskStart: new Date(),
        lastTaskEnd: new Date(),
      }
    }

    return arr
  }
}
