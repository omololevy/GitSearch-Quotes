import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';



import { AppComponent } from './app.component';
import { GitFormComponent } from './git-form/git-form.component';
import { GitSearchResultsComponent } from './git-search-results/git-search-results.component';
import { SearchGithubService } from './search-github.service';
import { DateFormatPipe } from './date-format.pipe';

const routes:Routes=[
  {path:"gitUser",component:GitFormComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    GitFormComponent,
    GitSearchResultsComponent,
    DateFormatPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SearchGithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
