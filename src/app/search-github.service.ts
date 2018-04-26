import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'
import { User } from './user';

@Injectable()
export class SearchGithubService {

	user:User;
	response: any = [];

  	constructor(private http: HttpClient) { 
  	}

	getUserData(username: string){

		interface ApiResponse{
	        public_repos:number;
	        bio:string

	    }

	    let promise =new Promise((resolve,reject)=>{
	        this.http.get<ApiResponse>("https://api.github.com/users/" + username).toPromise().then(response=>{
	            
	            // console.log(response.bio);
	            // this.userdata = new User(response.public_repos,response.bio);
	            // this.data.push(this.userdata);
	            this.response = response.bio;
	            return this.response;

	            // console.log(this.response);

	            // resolve()
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
