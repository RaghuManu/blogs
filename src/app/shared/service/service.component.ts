import { Component, OnInit,Inject } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import {MatDialog} from '@angular/material/dialog';
import {ServiceDialogComponent} from '../service-dialog/service-dialog.component';
import {Meta,Title} from '@angular/platform-browser';
import {DOCUMENT} from '@angular/common';
@Component({
  selector: "app-service",
  templateUrl: "./service.component.html",
  styleUrls: ["./service.component.scss"]
})
export class ServiceComponent implements OnInit {
  options: FormGroup;
  services = [
    
    "Web Application Development",
    "Mobile Application Development",
    "Search Engine Optimisation",
    "Social Media Marketing",
    "Paid Search (Google Ads)",
    "Website Analytics",
    "Mobile Marketing",
    "Online Training"
  ];
  constructor(private _formBuilder: FormBuilder,
              private dialog: MatDialog,
              private meta: Meta,
              private title: Title,
              @Inject(DOCUMENT) private dom) {
                   //   this.dom.URL = 'https://techteamalpha.com/';
                   this.title.setTitle('SEO, PPC, SMM & Web Development');
                   this.meta.addTags([
                     {name: 'description', content: 'Team ALPHA is a Company specialized in SEO, PPC, SMM & designing awesome websites. We help your brand, getting you tons of leads and sales through online marketing channels.'}
                   ]);
                   let link: HTMLLinkElement = this.dom.createElement('link');
                       link.setAttribute('rel', 'canonical');
                       this.dom.head.appendChild(link);
                       link.setAttribute('href','https://techteamalpha.com/service' );
              }

  ngOnInit() {
    this.options = this._formBuilder.group({
      fixed: false,
      top: 0,
      bottom: 0
    });
  }

  slideConfig = {
    slidesToShow: 3,
    slideToScroll: 3,
    dots: true,
    infinite: true
  };

  servicePageImages = [
    {
      img: "../../../assets/service.JPG",
      services: "Web Application Development"
    },
    {
      img: "../../../assets/service.JPG",
      services: "Mobile Application Development"
    },
    {
      img: "../../../assets/service.JPG",
      services: "Search Engine Optimisation"
    },
    { img: "../../../assets/service.JPG", services: "Social Media Marketing" },
    {
      img: "../../../assets/service.JPG",
      services: "Paid Search (Google Ads)"
    },
    { img: "../../../assets/service.JPG", services: "Website Analytics" },
    { img: "../../../assets/service.JPG", services: "Mobile Marketing" },
    { img: "../../../assets/service.JPG", services: "Online Training" }
  ];

  openDialog(): void {
    const dialogRef = this.dialog.open(ServiceDialogComponent, {
      height:'560px',
      width: '750px',
     
    });
  }
}
