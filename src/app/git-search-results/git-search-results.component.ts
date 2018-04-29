import { Component, OnInit,Output } from '@angular/core';
import { SearchGithubService } from '../search-github.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-git-search-results',
  templateUrl: './git-search-results.component.html',
  styleUrls: ['./git-search-results.component.css']
})

export class GitSearchResultsComponent implements OnInit {

    user:User;
    repoDetails = [];
    searchGithubService:SearchGithubService;
    public showData = false;

  	constructor(searchGithubService:SearchGithubService) { 
      this.searchGithubService = searchGithubService;
    }

  	ngOnInit() {
  		this.user = this.searchGithubService.user;
      this.repoDetails = this.searchGithubService.repoData;
  	}

}
