export class MyQuote {
	public showDescription:boolean;
	constructor(public id:number, public author:string, public quoted:string, public publisher:string, public noOfVotes:number, public dateCreated:Date){
		this.showDescription=false;
	}
}
