import { Component, OnInit } from '@angular/core'; // Here, we import Component from @angular/core which is where Component is located

@Component({
  	selector: 'app-quotes',
  	templateUrl: './quotes.component.html',
  	styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  	constructor() { }

  	// ngOnInit is a lifecycle hook. It is called each time the component is created.
  	ngOnInit() {
  	}

}
