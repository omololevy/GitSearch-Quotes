import { Component, OnInit, Input } from '@angular/core';
import { MyQuote } from '../my-quote';

@Component({
  selector: 'app-displayed-quote',
  templateUrl: './displayed-quote.component.html',
  styleUrls: ['./displayed-quote.component.css']
})
export class DisplayedQuoteComponent implements OnInit {
	@Input() quote:MyQuote;

  	constructor() { }

	ngOnInit() {
	}

}
