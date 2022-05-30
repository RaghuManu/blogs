import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-blogs",
  templateUrl: "./blogs.component.html",
  styleUrls: ["./blogs.component.css"]
})
export class BlogsComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit() {}
  navigateToBlogLists(blogList) {
    console.log(blogList);
    this._router.navigate([`${blogList}`]);
  }
}
