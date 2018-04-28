import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'
import { User } from './user';
import { Repository } from './repository';

@Injectable()
export class SearchGithubService {

	user:User;
	repository:Repository;
	repoData: any = [];

  	constructor(private http: HttpClient) { 
  		this.user = new User("",0,"","",new Date(),new Date());
  		this.repository = new Repository(0,"","");
  		
  		
  	}

	getUserData(username: string){

		interface ApiResponse{
	        bio:string,
	        public_repos:number,
	        login:string,
	        avatar_url:string,
	        created_at:Date, 
	        updated_at:Date,
	        name:string,
	        full_name:string,
	        repo:any	    
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
	                reject(error)
	            }
	        )

	        this.http.get<ApiResponse>("https://api.github.com/users/" + username + "/repos").toPromise().then(response=>{

	        	// for(var i=0; i<response.length; i++)
	        	// {
	        	// 	this.repository.name=response[i].name;
	        	// 	this.repository.full_name=response[i].full_name;
	        	// 	let repoLength = this.repo.length;
	        	// 	repository.id=repoLength+1;
	        	// 	this.repoData = new Repository(this.repository.name,this.repository.full_name);
	        	// 	this.repo.push(repoData);

	        	// 	console.log(this.repository.name,this.repository.full_name)
	        	// }



	        	this.repoData.repo=response;	   
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
