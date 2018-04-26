import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { GitFormComponent } from './git-form/git-form.component';
import { GitSearchResultsComponent } from './git-search-results/git-search-results.component';

const routes:Routes=[
  {path:"search_page",component:GitFormComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    GitFormComponent,
    GitSearchResultsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
