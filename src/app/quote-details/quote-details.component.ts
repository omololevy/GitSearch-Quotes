import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyQuote } from '../my-quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
	@Input() quote:MyQuote;

	quotes = [
    new MyQuote(1, 'Samora', 'Winter is Coming!', 'Jon Snow', 3, new Date()),
  ]

  

  	addNewQuote(myQuote) {
  		this.quotes.push(myQuote);
  	}

  	deleteQuote(complete:boolean,index){
        if (complete){
            let toDelete=confirm(`Are you sure you want to delete quote?`)
            
            if(toDelete){
                this.quotes.splice(index,1)
            }
        }
    }

    downvote(i) {
    	this.quotes[i].noOfVotes -=1;
    }

    upvote(a){
    	this.quotes[a].noOfVotes +=1;
    }

  	constructor() { }

  	ngOnInit() {
  	}

}
