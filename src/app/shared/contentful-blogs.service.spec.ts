import { TestBed } from '@angular/core/testing';

import { ContentfulBlogsService } from './contentful-blogs.service';

describe('ContentfulBlogsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContentfulBlogsService = TestBed.get(ContentfulBlogsService);
    expect(service).toBeTruthy();
  });
});
