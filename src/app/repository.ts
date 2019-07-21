export class Repository {
	// Our Repository object in this case will need the properties name, full_name, description, updated_at, html_url, clone_url, language and created_at to instantiate our Repository object. 
	constructor(public name: string, public full_name: string, public description: string, public updated_at:Date, public html_url: string, public clone_url: string, public language: string, public created_at:Date){}
}
