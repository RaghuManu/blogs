import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms'
import { SubscribeService } from '../subscribe-dialog/subscribe-service.service';
import { SuccessMessagesDialog } from '../shared/success-messages/success-messages.component';
import { MatDialog } from '@angular/material/dialog';
import * as _ from "lodash";
@Component({
  selector: 'app-subscribe-dialog',
  templateUrl: './subscribe-dialog.component.html',
  styleUrls: ['./subscribe-dialog.component.css']
})
export class SubscribeDialogComponent implements OnInit {
  submitted = false;

  subScribeForm: FormGroup;
  subscribe_technology: any[] = [];
  blogError : Boolean =false;
  selectedBlogs=[];
  checkBoxForm : FormGroup
  blogs = ["Angular","ReactJS","NodeJS","DigitalMarketing"]
  constructor(private dialogRef: MatDialogRef<SubscribeDialogComponent>,
    private _fb: FormBuilder,
    private _subscribeService: SubscribeService,
    private _dialog: MatDialog) { }
  ngOnInit() {
    this.subScribeForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      'myBlogs' :this.addBlogControls()
    })
  }
  addBlogControls=()=>{
    const arr = this.blogs.map(blog=>{
      return this._fb.control(false);
    });
    
    return this._fb.array(arr);
   }
   
 
   getSelectedBlogValues(){
     this.selectedBlogs = [];
     this.blogsArray.controls.forEach((control,i)=>{
           if(control.value){
             this.selectedBlogs.push(this.blogs[i]);
           }
     })
 
    
 
     this.blogError = this.selectedBlogs.length > 0 ? false:true;
   }
 
   get blogsArray(){
     return <FormArray>this.subScribeForm.get('myBlogs');
   }
  subscribe(): void {
    this.getSelectedBlogValues();
    this.submitted = true;
    // stop here if form is invalid
    if (this.subScribeForm.invalid) {
      return;
    }

    this.selectedBlogs
    this.selectedBlogs.forEach((blog)=>{
    console.log("---------------blog----------")
      console.log(blog)

      this.subscribe_technology.push(blog)
    })
  
    console.log("----------subscribe technology-------------")
    console.log(this.subscribe_technology)
    let subScribeData = {
      "name": `${this.subScribeForm.controls['name'].value}`,
      "email": `${this.subScribeForm.controls['email'].value}`,
      "subscribe_technology":[`${this.subscribe_technology}`]
    }
    console.log(this.subscribe_technology)
    
    if(!this.blogError && !this.subScribeForm.invalid){
    this._subscribeService.postSubscribeData(subScribeData)
      .subscribe(res => {
        console.log(res)
        this.close();
        this.openSuccessMessagesDialog();
      })
    this.dialogRef.close();
    }
    this.submitted = false;

  }

  openSuccessMessagesDialog(): void {
    const dialogRef = this._dialog.open(SuccessMessagesDialog, {
      /*   height:'450px', */
      width: '550px',
      data: 'Thank you for subscribing our blogs...'

    });
  }


  close() {
    this.dialogRef.close();
  }

}
