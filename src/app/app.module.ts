import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // We have done this import because the forms module is not available in our angular app by default
import { HttpClientModule } from '@angular/common/http'; // The HttpClientModule allows us to use HttpClient in our application


import { AppComponent } from './app.component'; // Imports AppComponent from src/app/app.component
import { GitRoutingModule } from './git-routing.module'; // // Imports Custom Routing Module GitRoutingModule from src/app/git-routing.module.ts

import { GitFormComponent } from './git-form/git-form.component'; // Imports GitFormComponent from src/app/git-form/git-form.component
import { GitSearchResultsComponent } from './git-search-results/git-search-results.component';
import { SearchGithubService } from './search-github.service'; // Imports SearchGithubService from src/app/search-github.service.ts
import { DateFormatPipe } from './date-format.pipe'; // Imports DateFormatPipe from src/app/date-format.pipe
import { CloneHighlighterDirective } from './clone-highlighter.directive'; // Imports CloneHighlighterDirective from src/app/clone-highlighter.directive
import { DaysCountPipe } from './days-count.pipe'; // Imports DaysCountPipe from src/app/days-count.pipe
import { QuotesComponent } from './quotes/quotes.component'; // Imports QuotesComponent from src/app/quotes/quotes.component
import { DisplayedQuoteComponent } from './displayed-quote/displayed-quote.component'; // Imports DisplayedQuoteComponent from src/app/displayed-quote/displayed-quote.component
import { QuoteDetailsComponent } from './quote-details/quote-details.component'; // Imports QuoteDetailsComponent from src/app/quote-details/quote-details.component
import { QuoteFormComponent } from './quote-form/quote-form.component'; // Imports QuoteFormComponent from src/app/quote-form/quote-form.component
import { TimeAgoPipe } from 'time-ago-pipe'; // TimeAgoPipr Install by NPM to Indicated Lifespan of Posted Quotes


@NgModule({
   // Components, Pipes & Directives
   declarations: [
      AppComponent,
      GitFormComponent,
      GitSearchResultsComponent,
      DateFormatPipe,
      CloneHighlighterDirective,
      DaysCountPipe,
      QuotesComponent,
      DisplayedQuoteComponent,
      QuoteDetailsComponent,
      QuoteFormComponent,
      TimeAgoPipe
   ], 
   // Imports Will Need Through the Application to Run Certain Functionalities
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      GitRoutingModule
   ],
   providers: [SearchGithubService], // Added SearchGithubService to the Providers Array. This will make the service accessible to the entire application.
   bootstrap: [AppComponent]
})
export class AppModule { }
