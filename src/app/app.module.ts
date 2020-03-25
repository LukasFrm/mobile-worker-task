import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CalendarComponent } from './components/calendar/calendar.component'
import { CalendarDayComponent } from './components/calendar-day/calendar-day.component'
import { SummaryComponent } from './components/summary/summary.component'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { BottomComponent } from './components/bottom/bottom.component'
// import { MatDialogModule } from '@angular/material/dialog'
import { DialogComponent } from './components/dialog/dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CalendarDayComponent,
    SummaryComponent,
    BottomComponent,
    DialogComponent,
  ],
  // entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
