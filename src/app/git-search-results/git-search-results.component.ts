import { Component, OnInit,Input,Output } from '@angular/core';
import { SearchGithubService } from '../search-github.service';
import { User } from '../user';

@Component({
  selector: 'app-git-search-results',
  templateUrl: './git-search-results.component.html',
  providers:[SearchGithubService], 
  styleUrls: ['./git-search-results.component.css']
})
export class GitSearchResultsComponent implements OnInit {

	userdata: string;

  	constructor(private searchGithubService:SearchGithubService) {
  		this.userdata = searchGithubService.response;
  	}

  	ngOnInit() {
  		
  	}

}
