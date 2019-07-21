export class User {
	// Our User object in this case will need the properties bio, public_repos, login, avatar_url, created_at, updated_at and html_url to instantiate our User object. 
	constructor(public bio: string, public public_repos: number, public login:string, public avatar_url:string, public created_at:Date, public updated_at:Date, public html_url: string){}
}
