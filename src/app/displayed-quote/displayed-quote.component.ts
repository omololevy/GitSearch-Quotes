import { Component, OnInit, Input } from '@angular/core'; //  Import for Input from @angular/core which allows us to do Input property binding.
import { MyQuote } from '../my-quote'; // Imported the MyQuote blueprint class in src/app/my-quote.ts

@Component({
  selector: 'app-displayed-quote',
  templateUrl: './displayed-quote.component.html',
  styleUrls: ['./displayed-quote.component.css']
})
export class DisplayedQuoteComponent implements OnInit {
	@Input() quote:MyQuote;

  	constructor() { }

  	// ngOnInit is a lifecycle hook. It is called each time the component is created.
	ngOnInit() {
	}

}
