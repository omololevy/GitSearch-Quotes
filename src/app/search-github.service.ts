import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'
import { User } from './user';

@Injectable()
export class SearchGithubService {

	user:User;

  	constructor(private http: HttpClient) { 
  		this.user = new User("",0,"","",new Date(),new Date());
  	}

	getUserData(username: string){

		interface ApiResponse{
	        bio:string,
	        public_repos:number,
	        login:string,
	        avatar_url:string,
	        created_at:Date, 
	        updated_at:Date 	    
	    }

	    let promise =new Promise((resolve,reject)=>{
	        this.http.get<ApiResponse>("https://api.github.com/users/" + username).toPromise().then(response=>{
	            
	            this.user.bio=response.bio;
	            this.user.avatar_url=response.avatar_url;
	            this.user.login=response.login;
	            this.user.public_repos=response.public_repos;
	            this.user.created_at=response.created_at;
	            this.user.updated_at=response.updated_at;

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
