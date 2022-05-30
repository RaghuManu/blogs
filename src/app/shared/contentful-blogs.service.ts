import { Injectable } from "@angular/core";
import { createClient, Entry } from "contentful";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class ContentfulBlogsService {
  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  });
  constructor() {}

  getDigitalMarketingBlogs(query?: object): Promise<Entry<any>[]> {
    return this.client
      .getEntries(
        Object.assign(
          {
            content_type: "digitalmarketingoverview"
          },
          query
        )
      )
      .then(res => res.items);
  }
  getDigitalMarketingBlog(blogId): Promise<Entry<any>> {
    return this.client
      .getEntries(
        Object.assign(
          {
            content_type: "digitalmarketingoverview"
          },
          { "fields.id": blogId }
        )
      )
      .then(res => res.items[0]);
  }

  getAngularBlogs(query?: object): Promise<Entry<any>[]> {
    return this.client
      .getEntries(
        Object.assign(
          {
            content_type: ""
          },
          query
        )
      )
      .then(res => res.items);
  }
  getAngularBlog(courseId): Promise<Entry<any>> {
    return this.client
      .getEntries(
        Object.assign(
          {
            content_type: ""
          },
          { "sys.id": courseId }
        )
      )
      .then(res => res.items[0]);
  }

  getReactBlogs(query?: object): Promise<Entry<any>[]> {
    return this.client
      .getEntries(
        Object.assign(
          {
            content_type: ""
          },
          query
        )
      )
      .then(res => res.items);
  }
  getReactBlog(courseId): Promise<Entry<any>> {
    return this.client
      .getEntries(
        Object.assign(
          {
            content_type: ""
          },
          { "sys.id": courseId }
        )
      )
      .then(res => res.items[0]);
  }

  getNodeJsBlogs(query?: object): Promise<Entry<any>[]> {
    return this.client
      .getEntries(
        Object.assign(
          {
            content_type: ""
          },
          query
        )
      )
      .then(res => res.items);
  }
  getNodeJsBlog(courseId): Promise<Entry<any>> {
    return this.client
      .getEntries(
        Object.assign(
          {
            content_type: ""
          },
          { "sys.id": courseId }
        )
      )
      .then(res => res.items[0]);
  }
}
