import { Component, OnInit } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog'
import { DialogComponent } from '../dialog/dialog.component'


@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.scss']
})
export class BottomComponent implements OnInit {

  // constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    // this.dialog.open(DialogComponent)
  }

  

}
