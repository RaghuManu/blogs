import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-success-messages',
  templateUrl: './success-messages.component.html',
  styleUrls: ['./success-messages.component.css']
})
export class SuccessMessagesDialog implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SuccessMessagesDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
  }
  close(){
    this.dialogRef.close()
  }

}
