import { Component, OnInit } from '@angular/core';
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
		this.searchGithubService.testingService();
		// return this.http.get('http://adzumi.co.ke');

	}

  	constructor(private http: HttpClient, searchGithubService:SearchGithubService) { 
  		this.searchGithubService = searchGithubService;
  	}

  	ngOnInit() {
  	}

}
