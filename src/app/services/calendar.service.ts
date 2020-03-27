import { Injectable } from '@angular/core'
import { CalendarDay } from '../models/CalendarDay'

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor() {}

  clickedDateObj: any = []
  clickedDayNo: number
  selectedDay: number
  weekArr: Array<CalendarDay>
  timeSheetisOpen: boolean
  fullDayNames: Array<string> = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]

  fullMonthNames: Array<string> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'November',
    'December',
  ]

  getWeek(): Array<CalendarDay> {
    let arr: Array<CalendarDay> = []
    let date = new Date()
    let thisYear = date.getFullYear()
    let thisMonth = date.getMonth()
    let thisDayNo = date.getUTCDate()

    for (let i = 0; i < 7; i++) {
      let whenEven = !(i % 2)

      let indexDate: Date = new Date(thisYear, thisMonth, thisDayNo - i)
      let isWeekend: boolean =
        indexDate.getDay() === 6 || indexDate.getDay() === 0
      let workHours: number = isWeekend
        ? 0
        : Math.floor(Math.random() * (12 + 1))
      let anyExpenses: boolean = !isWeekend && whenEven
      let workedOnWeekday = !isWeekend && workHours > 0

      arr[i] = {
        date: indexDate,
        quantity: anyExpenses
          ? Math.floor(Math.random() * Math.floor(4) + 1)
          : 0,
        price: anyExpenses ? Math.floor(Math.random() * Math.floor(1000)) : 0,
        eventType: 'Static entry',
        isExpenseType: anyExpenses && workedOnWeekday,
        isHoursEventType: workedOnWeekday,
        isAdditionalHoursEventType: workedOnWeekday,
        isWorkHour: false,
        isApproved: workHours ? whenEven : false,
        isRejected: workHours ? !whenEven : false,
        tasksCount: workHours
          ? Math.floor(Math.random() * Math.floor(5) + 1)
          : 0,
        // Always start work at 8am
        firstTaskStart: new Date(thisYear, thisMonth, thisDayNo - i, 8),
        lastTaskEnd: new Date(
          thisYear,
          thisMonth,
          thisDayNo - i,
          8 + workHours,
        ),
      }
    }
    this.weekArr = arr.reverse()
    return this.weekArr
  }

  getWorkedHours(): number {
    let diff = Math.abs(
      this.clickedDateObj.firstTaskStart.getTime() -
        this.clickedDateObj.lastTaskEnd.getTime(),
    )
    let hourDiff = diff / 1000 / 3600
    let negativeRounded = Math.floor(hourDiff)

    return hourDiff
  }

  getOvertime(): number {
    let res = Math.max(this.getWorkedHours() - 8, 0)
    return res
  }

  setClickedDayGlobal(x: CalendarDay): void {
    this.clickedDateObj = x
    this.clickedDayNo = x.date.getUTCDate() + 1
    this.toggleTimeSheet(false)

  }

  setToday(): void {
    this.clickedDateObj = this.weekArr[this.weekArr.length - 1]
    this.clickedDayNo =
      this.weekArr[this.weekArr.length - 1].date.getUTCDate() + 1
    
    this.toggleTimeSheet(false)
  }

  getSelectedDayString(): any {
    let dateString: string = this.fullDayNames[
      new Date(this.clickedDateObj.date).getDay()
    ]
    let dayName: string = new Date(this.clickedDateObj.date)
      .toLocaleString('NO-no')
      .slice(0, 9)
      .replace(/\//g, '.')

    return typeof dateString !== 'undefined' ? `${dateString} ${dayName}` : null
  }

  toggleTimeSheet(open: boolean): void {
    open ? (this.timeSheetisOpen = true) : (this.timeSheetisOpen = false)
  }
}
