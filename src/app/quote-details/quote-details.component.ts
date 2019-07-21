import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; //  Import for Input from @angular/core which allows us to do Input property binding.
import { MyQuote } from '../my-quote'; // Imported the MyQuote blueprint class in src/app/my-quote.ts

@Component({
   selector: 'app-quote-details',
   templateUrl: './quote-details.component.html',
   styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
	@Input() quote:MyQuote; // This means when we will have the property quote in the quote-details.component, it will have received its data from a parent component, in our case, the  displayed-quote.component.

   highestVotes: number = 0; // highestVotes Starts at Zero for Every Posted Quote
   highestQuote: number = 0; // id for the Quote with Highest Vote is assigned to Zero when the Component is Initialized
	quotes = [
      new MyQuote(1, 'Samora', 'Winter is Coming!', 'Jon Snow', 3, new Date()), // Added One Quote to be Displayed by default when Component is Initialized
   ]

   // Function calculates the quote with the highest votes after every Downvote or Upvote
   calculateHighestVotes() {
      for (var i = 0; i < this.quotes.length; i++) { // Loop through Current Posted quotes
         if (this.quotes[i].noOfVotes > this.highestVotes) { // If noOfVotes for current looped quote is higher than the current highestVotes
            this.highestVotes = this.quotes[i].noOfVotes; // Assign the new noOfVotes value to highestVotes
            this.highestQuote = i; // Take the index of the quote with the highest noOfVotes and assign its index to highestQuote
         }
      }
   }

   // Function adds new Posted quotes to quotes array
  	addNewQuote(myQuote) {
  		this.quotes.push(myQuote);
  	}

   // Function for Deleting a Quote, we pass a boolean value and the index of the quote we want to delete
  	deleteQuote(complete:boolean,index){
      // If complete = true then
      if (complete){
         let toDelete = confirm(`Are you sure you want to delete quote?`) // Display Alert to Confirm Delete
         // If toDelete = true then
         if(toDelete){
             this.quotes.splice(index,1) // Use the splice array method to remove the given index
         }
      }
   }

   // Downvote Function
   downvote(i) {
    	this.quotes[i].noOfVotes -=1; // Decrement noOfVotes value by 1
   }

   // Upvote Function
   upvote(a){
    	this.quotes[a].noOfVotes +=1; // Increments noOfVotes value by 1
   }

  	constructor() { }

   // ngOnInit is a lifecycle hook. It is called each time the component is created.
  	ngOnInit() {
  	}

}
