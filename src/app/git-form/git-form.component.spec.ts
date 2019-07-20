import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitFormComponent } from './git-form.component';

describe('GitFormComponent', () => {
  let component: GitFormComponent;
  let fixture: ComponentFixture<GitFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
