import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyQuote } from '../my-quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
	quoteAuthor: string;
	quotePublisher: string;
	myQuote: string;
	newQuote: any;
	myDate: Date;

	@Output() addQuote = new EventEmitter();

	submitQuote() {
		this.myDate = new Date();
        this.newQuote = new MyQuote(0,this.quoteAuthor,this.myQuote,this.quotePublisher,0,this.myDate);
        this.addQuote.emit(this.newQuote);
    }

  constructor() { }

  ngOnInit() {
  }

}
