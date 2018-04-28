import { Component, OnInit,Output } from '@angular/core';
import { SearchGithubService } from '../search-github.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-git-form',
  templateUrl: './git-form.component.html',
  styleUrls: ['./git-form.component.css']
})
export class GitFormComponent implements OnInit {

	username: string;
	searchGithubService:SearchGithubService;


	submitUsername() {
		this.searchGithubService.getUserData(this.username);
	}

  	constructor(searchGithubService:SearchGithubService) { 
  		this.searchGithubService = searchGithubService;
  	}

  	ngOnInit() {
  	}

}
