import { Component, OnInit } from '@angular/core';
import {MatDialogRef,MatDialog} from '@angular/material/dialog';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {SharedService} from '../shared-services.service';
import {SuccessMessagesDialog} from '../success-messages/success-messages.component'
@Component({
  selector: 'app-service-dialog',
  templateUrl: './service-dialog.component.html',
  styleUrls: ['./service-dialog.component.css']
})
export class ServiceDialogComponent implements OnInit {
  submitted = false;
  about : boolean =true;
  business : boolean;
  
  serviceForm:FormGroup
  aboutYouForm : FormGroup;
  aboutBusinessForm : FormGroup;
  constructor(private _dialogRef : MatDialogRef<ServiceDialogComponent>,
              private _formBuilder : FormBuilder,
              private _dialog : MatDialog,
              private _sharedService : SharedService) { }

  services = [
    null,
    "Website Development",
    "Mobile Application Development",
    "Search Engine Optimisation",
    "Social Media Marketing",
    "Paid Search (Google Ads)",
    "Website Analytics",
    "Mobile Marketing",
    "Online Training"
  ];
  ngOnInit() {

    this.aboutYouForm = this._formBuilder.group({
      name :['',Validators.required],
      email : ['',[Validators.required,Validators.email]],
      phoneNumber : ['',Validators.required],
      job :['',Validators.required]
    })

    this.aboutBusinessForm = this._formBuilder.group({
      businessName :['',Validators.required],
      service:['',Validators.required],
      url :['',Validators.required]
    })
  }

  close(){
    this._dialogRef.close()
  }
  nextStep(){
  
    this.submitted = true;

    // stop here if form is invalid
    if (this.aboutYouForm.invalid) {
        return;
    }

    console.log("next step function")
    this.about=false;
    this.business=true;
    console.log(this.aboutYouForm.invalid)
    console.log(this.aboutYouForm.controls)
    this.submitted = false;

  }

  goBack(){
    this.about=true;
    this.business=false;
  }
  sendForm(){

    this.submitted = true;

    // stop here if form is invalid
    if (this.aboutBusinessForm.invalid) {
        return;
    }
    let businessInfoDetails = {
      "name" : this.aboutYouForm.controls['name'].value,
      "email" : this.aboutYouForm.controls['email'].value,
      "mobile" : this.aboutYouForm.controls['phoneNumber'].value,
      "job":this.aboutYouForm.controls['job'].value,
      
        "business_name" : this.aboutBusinessForm.controls['businessName'].value,
        "service" : this.aboutBusinessForm.controls['service'].value,
        "website_url" : this.aboutBusinessForm.controls['url'].value
      
    }
    this._sharedService.postBusinessInfoServiceDetails(businessInfoDetails)
    .subscribe(res=>{
      console.log(res)
      this.aboutBusinessForm.reset();
      this.aboutYouForm.reset();
      this.submitted=false;
      this.close();
      this.openSuccessMessagesDialog();
    },(error =>{
      console.log(error)
    }))
    
    
  }

  openSuccessMessagesDialog(): void {
    const dialogRef = this._dialog.open(SuccessMessagesDialog, {
    /*   height:'450px', */
      width: '550px',
      data:"Thank you. Someone will be in touch shortly... "
     
    });
  }

  get aboutYouForms() { return this.aboutYouForm.controls; }

  get aboutBusinessForms() { return this.aboutBusinessForm.controls; }

}
