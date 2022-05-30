import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BlogsComponent } from "./blogs/blogs.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ServiceComponent } from "./service/service.component";
import { ContactComponent } from "./contact/contact.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FooterComponent } from "./footer/footer.component";
import { BlogDetailsComponent } from "./blog-details/blog-details.component";
import { BlogListsComponent } from "./blog-lists/blog-lists.component";
import { MdToHtmlPipe } from "./blog-details/md-to-html.pipe";
import { MatCardModule } from "@angular/material/card";
import {MatDialogModule} from '@angular/material/dialog';
import { ServiceDialogComponent } from './service-dialog/service-dialog.component';
import {HttpClientModule} from '@angular/common/http';
import { SuccessMessagesDialog } from './success-messages/success-messages.component';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    BlogsComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    FooterComponent,
    BlogDetailsComponent,
    BlogListsComponent,
    MdToHtmlPipe,
    ServiceDialogComponent,
    SuccessMessagesDialog
  ],
  imports: [CommonModule, MatCardModule,MatDialogModule,ReactiveFormsModule,HttpClientModule,MatButtonModule],
  exports: [
    BlogsComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    
    MdToHtmlPipe,
   
  ],
  entryComponents:[
    ServiceDialogComponent,
    SuccessMessagesDialog
  ]

})
export class SharedModule {}
