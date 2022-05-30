import { Component, OnInit,  Inject } from "@angular/core";
import { Router } from "@angular/router";
import {Meta,Title} from '@angular/platform-browser';
import {MatDialog} from '@angular/material/dialog';
import {ServiceDialogComponent} from '../service-dialog/service-dialog.component'
import {DOCUMENT} from '@angular/common';
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private _router: Router,
              private dialog: MatDialog,
              private meta: Meta,
              private title: Title,
              @Inject(DOCUMENT) private dom) {

                //   this.dom.URL = 'https://techteamalpha.com/';
                this.title.setTitle('Best Digital Marketing & Web Development Company | Team ALPHA');
                this.meta.addTags([
                  {name: 'description', content: 'Best Digital Marketing & Web Development Company in Bangalore. Team ALPHA leverages Digital Marketing to help the startups and brands to grow exponentially.'}
                ]);
                let link: HTMLLinkElement = this.dom.createElement('link');
                    link.setAttribute('rel', 'canonical');
                    this.dom.head.appendChild(link);
                    link.setAttribute('href','https://techteamalpha.com/' );

              }
            

  ngOnInit() {}
  services = [
    {
      service: "Web Application Development",
      img: "../../../assets/Website- Development.png"
    },
    { service: "Search Engine Optimisation", img: "../../../assets/SEO.png" },
    { service: "Social Media Marketing", img: "../../../assets/SMM.png" },
    {
      service: "Website Analytics",
      img: "../../../assets/Website-Analytics.png"
    }
  ];

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
