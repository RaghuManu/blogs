import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  facebook = 100;
  instagram = 100;
  twitter = 100;
  linkedin = 100;
  constructor() {}

  ngOnInit() {}
}
