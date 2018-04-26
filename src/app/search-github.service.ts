import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchGithubService {



	getUserData(username: string){
		this.http.get("https://api.github.com/users/" + username).subscribe(data => {
      		console.log(data);
    	});
	}



  	constructor(private http: HttpClient) { }

}
