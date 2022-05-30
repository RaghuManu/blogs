import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./shared/home/home.component";
import { AboutComponent } from "./shared/about/about.component";
import { ContactComponent } from "./shared/contact/contact.component";
import { BlogsComponent } from "./shared/blogs/blogs.component";
import { ServiceComponent } from "./shared/service/service.component";
import { BlogListsComponent } from "./shared/blog-lists/blog-lists.component";
import { BlogDetailsComponent } from "./shared/blog-details/blog-details.component";
const routes: Routes = [
  { path: "home", component: HomeComponent },

  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "blog", component: BlogsComponent },
  { path: "service", component: ServiceComponent },
  { path: "blogs", component: BlogListsComponent },
  {
    path: 'blogdetails',
    redirectTo: 'blogdetails/id',
    pathMatch: 'full'
  },
  {
    path: 'blogdetails/:id',
    component: BlogDetailsComponent
  },
  /* { path: "bloglist/:id", component: BlogListsComponent }, */
 /*  { path: "blogdetails/:id", component: BlogDetailsComponent }, */
  { path: "", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
