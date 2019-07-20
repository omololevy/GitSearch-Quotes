import { Component, OnInit,Output } from '@angular/core';
import { SearchGithubService } from '../search-github.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Repository } from '../repository';

@Component({
  selector: 'app-repo-form',
  templateUrl: './repo-form.component.html',
  styleUrls: ['./repo-form.component.css']
})
export class RepoFormComponent implements OnInit {

	repository:Repository;
	repo: string;
	searchGithubService:SearchGithubService;

  	submitRepository() {
		
	}


	constructor(searchGithubService:SearchGithubService) { 
		this.searchGithubService = searchGithubService;
	}

  	ngOnInit() {}

}
