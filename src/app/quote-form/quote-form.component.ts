import { Component, OnInit, Output, EventEmitter } from '@angular/core'; // Here, we import Component from @angular/core which is where Component is located. We've also imported Output decorator and the EventEmitter class
import { NgForm } from '@angular/forms';
import { MyQuote } from '../my-quote'; // Imported the MyQuote blueprint class in src/app/my-quote.ts

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
	quoteAuthor: string; // Property Created to Store Value Entered in author input
	quotePublisher: string; // Property Created to Store Value Entered in publisher input
	myQuote: string; // Property Created to Store Value Entered in quotes textarea
	newQuote: any; // Created to Store New Instance of Quotes 
	myDate: Date; // Date Property Declared but not Initialized

   // used the Output decorator to define addQuote as an EventEmitter
	@Output() addQuote = new EventEmitter();

   // Functioned Called when we Submit Our Form
	submitQuote() {
		this.myDate = new Date(); // Assign Current Date to Date Property
      this.newQuote = new MyQuote(0,this.quoteAuthor,this.myQuote,this.quotePublisher,0,this.myDate); // Creates new User Instance from the Form Inputs
      this.addQuote.emit(this.newQuote); // Calls the emit method on the addQuote EventEmitter
   }

   constructor() { }

   // ngOnInit is a lifecycle hook. It is called each time the component is created.
   ngOnInit() {
   }

}
