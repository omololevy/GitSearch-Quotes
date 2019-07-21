import { Injectable } from '@angular/core'; // We import Injectable which is essential in creating a service because angular uses it to define a service class that might require dependencies
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { User } from './user'; // // Imported the User blueprint class in src/app/user.ts
import { Repository } from './repository'; // // Imported the Repository blueprint class in src/app/repository.ts
import * as process from 'process';


@Injectable()
export class SearchGithubService {

	user:User; // We'll need the User blueprint class for Creating a new User Instance
	repository:Repository; // // We'll need the Repository blueprint class for Creating a new Repository Instance
	repoData = []; // Created an Empty Multi-Dimensional Array that we'll User for Every Repository Instance we get from a given Username
	newUserData :any = []; // This Array Holds the Property for Every Array we Push to the repoData Array
	showInput:boolean;
	showData:boolean;

  	constructor(private http: HttpClient) { 
  		this.user = new User("",0,"","",new Date(),new Date(),"");
  		this.repository = new Repository("","","",new Date(),"","","",new Date()); 		
  	}


  	// getUserData Function Takes in the Username Input and Passes it as an Arguement which is called from the git-form.component.ts by the submitUsername function 
	getUserData(username: string){

		this.repoData.length = 0; // Empties the Array From Previous Request After a New Request

		// The HttpClient module converts the response into an object but does not specify what type of object it is. We can tell HttpClient what type of response we are expecting by defining an interface
		// Here we create an interface ApiResponse that contains the properties that we need from the response. 
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
	    	// We then use the getmethod and pass to the API URL. we then call the subscribe function that takes in the response function that is called when the API request is successful and returns a response.
	        this.http.get<ApiResponse>("https://api.github.com/users/" + username).toPromise().then(response=>{
	            // Mapping The Response we get to Every Property that we'll Eventually Use to Display in our git-search-results.component.html
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

	        // We then use the getmethod and pass to the API URL. we then call the subscribe function that takes in the response function that is called when the API request is successful and returns a response.
	        this.http.get<any>("https://api.github.com/users/" + username + "/repos").toPromise().then(response=>{
	        	// We then pass the interface with the get method. 
	        	for(var i=0; i<response.length; i++)
	        	{
	        		// If the response is successful we create a new Repository instance and passing in the response properties. We then assign this new Repository instance to the newUserData property.
	        		this.newUserData = new Repository(response[i].name,response[i].full_name,response[i].description,response[i].updated_at,response[i].html_url,response[i].clone_url,response[i].language,response[i].created_at);
	        		this.repoData.push(this.newUserData);
	        	}

	            resolve()

	        },
	        error=>{

	                reject(error)
	            }
	        )
	    })

	    return promise
	}

	



}
