import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'
import { User } from './user';

@Injectable()
export class SearchGithubService {

	user:User;

  	constructor(private http: HttpClient) { 
  		this.user=new User(0,'');
  	}

	getUserData(username: string){

		interface ApiResponse{
	        noOfRepos:string;
	        bio:string

	    }

	    let promise =new Promise((resolve,reject)=>{
	        this.http.get<ApiResponse>("https://api.github.com/users/" + username).toPromise().then(response=>{
	            
	            // console.log(response.bio);
	            this.user.bio=response.bio

	            resolve()
	        },
	        error=>{
	                // this.quote.quote="Never, never, never give up."
	                // this.quote.author="winston churchill"
	                reject(error)
	            }
	        )
	    })

	    return promise
	}

}
