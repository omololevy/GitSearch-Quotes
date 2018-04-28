import { Component, OnInit,Output } from '@angular/core';
import { SearchGithubService } from '../search-github.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { Repository } from '../repository';

@Component({
  selector: 'app-git-search-results',
  templateUrl: './git-search-results.component.html',
  styleUrls: ['./git-search-results.component.css']
})

export class GitSearchResultsComponent implements OnInit {

    user:User;
    repository:Repository;
    searchGithubService:SearchGithubService;

  	constructor(searchGithubService:SearchGithubService) { 
      this.searchGithubService = searchGithubService;
    }

  	ngOnInit() {
  		this.user=this.searchGithubService.user;
      this.repository=this.searchGithubService.repository;
  	}

}
