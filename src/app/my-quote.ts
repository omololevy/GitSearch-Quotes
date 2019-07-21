export class MyQuote {
	// Our MyQuote object in this case will need the properties id, author, quoted, publisher, noOfVotes and dateCreated to instantiate our MyQuote object. 
	constructor(public id:number, public author:string, public quoted:string, public publisher:string, public noOfVotes:number, public dateCreated:Date){
		
	}
}
