import { Component, OnInit,Inject } from "@angular/core";
import { Entry } from "contentful";
import { Router } from "@angular/router";
import { ContentfulBlogsService } from "../contentful-blogs.service";
import {Meta,Title} from '@angular/platform-browser';
import {DOCUMENT} from '@angular/common';
@Component({
  selector: "app-blog-lists",
  templateUrl: "./blog-lists.component.html",
  styleUrls: ["./blog-lists.component.scss"]
})
export class BlogListsComponent implements OnInit {
  blogs: Entry<any>[] = [];
  constructor(
    private router: Router,
    private contentfulService: ContentfulBlogsService,
    private meta: Meta,
    private title: Title,
    @Inject(DOCUMENT) private dom
  ) {

      //   this.dom.URL = 'https://techteamalpha.com/';
      this.title.setTitle('Helping You Succeed Through Online Marketing');
      this.meta.addTags([
        {name: 'description', content: 'Actionable tips on Digital Marketing & Web Development based on the latest technologies.'}
      ]);
      let link: HTMLLinkElement = this.dom.createElement('link');
          link.setAttribute('rel', 'canonical');
          this.dom.head.appendChild(link);
          link.setAttribute('href','https://techteamalpha.com/blogs' );
  }

  ngOnInit() {
    this.contentfulService.getDigitalMarketingBlogs().then(blogs => {
      console.log(blogs);
    
      return (this.blogs = blogs);
    });

  }

  goToBlogsDetailsPage(blogId) {
    console.log(blogId);
    
    this.router.navigate(["/blogdetails", blogId]);
  }
}
