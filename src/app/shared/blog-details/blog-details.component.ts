import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { ContentfulBlogsService } from "../contentful-blogs.service";
import { Entry } from "contentful";
@Component({
  selector: "app-blog-details",
  templateUrl: "./blog-details.component.html",
  styleUrls: ["./blog-details.component.css"]
})
export class BlogDetailsComponent implements OnInit {
  blogDetail: Entry<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentfulService: ContentfulBlogsService
  ) {}

  ngOnInit() {
    const blogId = this.route.snapshot.paramMap.get("id");
    this.contentfulService.getDigitalMarketingBlog(blogId).then(blogDetail => {
      this.blogDetail = blogDetail;
      console.log(this.blogDetail);
    });
  }
  goToBlogList() {
    this.router.navigate(["/bloglist/digitalMarketing"]);
  }
}
