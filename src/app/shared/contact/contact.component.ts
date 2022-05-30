import { Component, OnInit ,Inject} from "@angular/core";
import {Validators, FormGroup, FormBuilder} from '@angular/forms';
import {SharedService} from '../shared-services.service';
import {SuccessMessagesDialog} from '../success-messages/success-messages.component';
import {MatDialog} from '@angular/material/dialog';
import {Meta,Title} from '@angular/platform-browser';
import {DOCUMENT} from '@angular/common';
@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  namePlaceholder = "Enter the Name";
  emailPlaceholder = "Enter the Email";
  messagePlaceholder = "(Remember, short and sweet please)";
  contactForm : FormGroup;
  submitted = false;
  show_Message : boolean;

  constructor(private _formBuilder:FormBuilder,
              private _sharedService : SharedService,
              private _dialog : MatDialog,
              private meta: Meta,
              private title: Title,
              @Inject(DOCUMENT) private dom
              ) {

                  //   this.dom.URL = 'https://techteamalpha.com/';
      this.title.setTitle('Digital Marketing & Web Development Company');
      this.meta.addTags([
        {name: 'description', content: 'Want to collaborate? Contact us through this page or visit us in our office to explore opportunities together.'}
      ]);
      let link: HTMLLinkElement = this.dom.createElement('link');
          link.setAttribute('rel', 'canonical');
          this.dom.head.appendChild(link);
          link.setAttribute('href','https://techteamalpha.com/contact' );
              }
    
      
  ngOnInit() {
    this.contactForm = this._formBuilder.group({
      subject:['',Validators.required],
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      message:['',Validators.required]
    })
  }

  sendQuery(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.contactForm.invalid) {
        return;
    }
      let contactDetails ={
        
          "name" : this.contactForm.controls.name.value,
          "email" : this.contactForm.controls.email.value,
          "message":this.contactForm.controls.message.value,
          "subject" :this.contactForm.controls.subject.value
          
        
      }
    this._sharedService.postContactDetails(contactDetails)
    .subscribe((res)=>{
        console.log(res)
        this.openSuccessMessagesDialog();
        this.contactForm.reset();
        this.submitted = false;
        
    },
    (error)=>{
          console.log(error)
    })

    
  }

  openSuccessMessagesDialog(): void {
    const dialogRef = this._dialog.open(SuccessMessagesDialog, {
    /*   height:'450px', */
      width: '550px',
      data:"Thank you for your message. It has been sent..."
     
    });
  }

  get contactForms(){return this.contactForm.controls}
}
