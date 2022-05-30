import { Component, OnInit,Inject } from "@angular/core";
import { Router } from "@angular/router";
import {MatDialog} from '@angular/material/dialog';
import {ServiceDialogComponent} from '../service-dialog/service-dialog.component'
import {Meta,Title} from '@angular/platform-browser';
import {DOCUMENT} from '@angular/common';
@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  constructor(private _router: Router,
              private dialog: MatDialog,
              private meta: Meta,
              private title: Title,
              @Inject(DOCUMENT) private dom) {

                    //   this.dom.URL = 'https://techteamalpha.com/';
                    this.title.setTitle('Digital Marketing & Web Development Company');
                    this.meta.addTags([
                      {name: 'description', content: 'Team ALPHA helps company to reach their full potential. We are online entrepreneurs at our heart, and live by our values to provide outstanding results for our clients.'}
                    ]);
                    let link: HTMLLinkElement = this.dom.createElement('link');
                        link.setAttribute('rel', 'canonical');
                        this.dom.head.appendChild(link);
                        link.setAttribute('href','https://techteamalpha.com/about' );
    
              }

  ngOnInit() {}

  navigateToPage(page) {
    console.log(page);
    this._router.navigate([`${page}`]);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ServiceDialogComponent, {
      height:'560px',
      width: '750px',
     
    });
  }
}
