import { TestBed, inject } from '@angular/core/testing';

import { SearchGithubService } from './search-github.service';

describe('SearchGithubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchGithubService]
    });
  });

  it('should be created', inject([SearchGithubService], (service: SearchGithubService) => {
    expect(service).toBeTruthy();
  }));
});
