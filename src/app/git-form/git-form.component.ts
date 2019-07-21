import { Component, OnInit,Output } from '@angular/core';
import { SearchGithubService } from '../search-github.service';
import { HttpClient } from '@angular/common/http'; // Allows us to use HttpClient in our application
import { NgForm } from '@angular/forms';
import { User } from '../user'; // Imported the User blueprint class in src/app/user.ts

@Component({
  selector: 'app-git-form',
  templateUrl: './git-form.component.html',
  styleUrls: ['./git-form.component.css']
})
export class GitFormComponent implements OnInit {

  user:User;
	username: string; // Gotten from the form username input
	searchGithubService:SearchGithubService; // Declare the searchGithubService which is of type SearchGithubService we imported from src/app/search-github.service  
  public showInput = true; // Assign showInput boolean value true
  public showData = false; // Assign showData boolean value false


	submitUsername() {
		this.searchGithubService.getUserData(this.username); // Passing the username entered as an arguement to getUserData function in our service then fed to the API for a response if the user exists
    this.showInput = false;
    this.showData = true;
	}

  showUserInput(hideInput) {
    this.showInput = hideInput;
    this.showData = false;
  }

  // We first import the service SearchGithubService class.Then inject the service into our Component’s constructor and we assign it to an searchGithubService property
	constructor(searchGithubService:SearchGithubService) { 
		this.searchGithubService = searchGithubService;
	}

	ngOnInit() {
	}

}
