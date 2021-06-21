import { Component, OnInit,Output,EventEmitter } from '@angular/core'; // Here, we import Component from @angular/core which is where Component is located. We've also imported Output decorator and the EventEmitter class
import { SearchGithubService } from '../search-github.service';
import { NgForm } from '@angular/forms';
import { User } from '../user'; // Imported the User blueprint class in src/app/user.ts

@Component({
  selector: 'app-git-search-results',
  templateUrl: './git-search-results.component.html',
  styleUrls: ['./git-search-results.component.css']
})

export class GitSearchResultsComponent implements OnInit {

    user:User; // Property we'll use in our git-search-results.component.html to render the User instances
    repoDetails = []; // Property we'll use in our git-search-results.component.html to render the Repository instances
    searchGithubService:SearchGithubService; // Declare the searchGithubService which is of type SearchGithubService we imported from src/app/search-github.service  
    hideInput:boolean; // Declare hideinput as a boolean property

    // We first import the service SearchGithubService class.Then inject the service into our Component’s constructor and we assign it to an searchGithubService property
  	constructor(searchGithubService:SearchGithubService) { 
      this.searchGithubService = searchGithubService;
    }

    // used the Output decorator to define toggleBack as an EventEmitter
    @Output() toggleBack = new EventEmitter();

    goBack(){
      this.hideInput = true;
      this.toggleBack.emit(this.hideInput);
    }

    // ngOnInit is a lifecycle hook. It is called each time the component is created.
  	ngOnInit() {
  		this.user = this.searchGithubService.user; // / Get the Response from SearchGithubService from user then assign it to user which we'll use to render the instances of User on the HTML
      this.repoDetails = this.searchGithubService.repoData; // Get the Response from SearchGithubService from repoData array then assign it to repoDetails which we'll use to render the instances of Repository on the HTML
  	}

}
