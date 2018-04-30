import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'
import { User } from './user';
import { Repository } from './repository';

@Injectable()
export class SearchGithubService {

	user:User;
	repository:Repository;
	repoData = [];
	newUserData :any = [];
	showInput:boolean;
	showData:boolean;

  	constructor(private http: HttpClient) { 
  		this.user = new User("",0,"","",new Date(),new Date(),"");
  		this.repository = new Repository("","","",new Date(),"");
  		
  		
  	}

	getUserData(username: string){

		this.repoData.length = 0;

		interface ApiResponse{
	        bio:string,
	        public_repos:number,
	        login:string,
	        avatar_url:string,
	        created_at:Date, 
	        updated_at:Date,
	        name:string,
	        full_name:string, 
	        html_url:string   
	    }

	    let promise =new Promise((resolve,reject)=>{
	        this.http.get<ApiResponse>("https://api.github.com/users/" + username).toPromise().then(response=>{
	            
	            this.user.bio=response.bio;
	            this.user.avatar_url=response.avatar_url;
	            this.user.login=response.login;
	            this.user.public_repos=response.public_repos;
	            this.user.created_at=response.created_at;
	            this.user.updated_at=response.updated_at;
	            this.user.html_url=response.html_url;

	            resolve()
	        },
	        error=>{
	                reject(error)
	            }
	        )

	        this.http.get<any>("https://api.github.com/users/" + username + "/repos").toPromise().then(response=>{

	        	for(var i=0; i<response.length; i++)
	        	{
	        		this.newUserData = new Repository(response[i].name,response[i].full_name,response[i].description,response[i].updated_at,response[i].html_url);
	        		this.repoData.push(this.newUserData);
	        	}

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

	getRepoData(repo: string){

		// this.repoData.length = 0;

		// interface ApiResponse{
	 //        bio:string,
	 //        public_repos:number,
	 //        login:string,
	 //        avatar_url:string,
	 //        created_at:Date, 
	 //        updated_at:Date,
	 //        name:string,
	 //        full_name:string, 
	 //        html_url:string   
	 //    }

	 //    let promise =new Promise((resolve,reject)=>{
	 //        this.http.get<ApiResponse>("https://api.github.com/users/" + username).toPromise().then(response=>{
	            
	 //            this.user.bio=response.bio;
	 //            this.user.avatar_url=response.avatar_url;
	 //            this.user.login=response.login;
	 //            this.user.public_repos=response.public_repos;
	 //            this.user.created_at=response.created_at;
	 //            this.user.updated_at=response.updated_at;
	 //            this.user.html_url=response.html_url;

	 //            resolve()
	 //        },
	 //        error=>{
	 //                reject(error)
	 //            }
	 //        )

	 //        this.http.get<any>("https://api.github.com/users/" + username + "/repos").toPromise().then(response=>{

	 //        	for(var i=0; i<response.length; i++)
	 //        	{
	 //        		this.newUserData = new Repository(response[i].name,response[i].full_name,response[i].description,response[i].updated_at,response[i].html_url);
	 //        		this.repoData.push(this.newUserData);
	 //        	}

	 //            resolve()

	 //        },
	 //        error=>{
	 //                // this.quote.quote="Never, never, never give up."
	 //                // this.quote.author="winston churchill"
	 //                reject(error)
	 //            }
	 //        )
	 //    })

	 //    return promise
	}



}
