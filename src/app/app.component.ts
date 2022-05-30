import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {MatDialog} from '@angular/material/dialog';
import {SubscribeDialogComponent} from './subscribe-dialog/subscribe-dialog.component';
import { environment} from '../environments/environment'
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(private _router: Router,
              private dialog: MatDialog) {}
  ngOnInit() {
   // console.log(window.location.origin)
    console.log(environment.teamAlphaServerapi)
  }
  navigate(page) {
    this._router.navigate([`${page}`]);
  }
  openSubscribeDialog(): void {
    const dialogRef = this.dialog.open(SubscribeDialogComponent, {
      height:'450px',
      width: '550px',
     
    });
  }
}
