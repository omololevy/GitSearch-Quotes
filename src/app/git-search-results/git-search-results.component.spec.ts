import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitSearchResultsComponent } from './git-search-results.component';

describe('GitSearchResultsComponent', () => {
  let component: GitSearchResultsComponent;
  let fixture: ComponentFixture<GitSearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitSearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
