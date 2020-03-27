import { Component, OnInit, Input } from '@angular/core'
import { CalendarService } from '../../services/calendar.service'
import { CalendarDay } from 'src/app/models/CalendarDay'

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})


export class SummaryComponent implements OnInit {

  
  constructor(public calendarService: CalendarService) {}

  dayData: CalendarDay = this.calendarService.clickedDateObj
  timeSheetisOpen: boolean

  ngOnInit(): void {
  }

  hoursHeader():string {
    return `${this.calendarService.clickedDateObj.firstTaskStart.toTimeString().slice(0,5)}-${this.calendarService.clickedDateObj.lastTaskEnd.toTimeString().slice(0,5)}`
  }

  selectedDayString(): string {
    return this.calendarService.getSelectedDayString()
  }
}
