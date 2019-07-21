import { Directive,ElementRef,HostListener } from '@angular/core'; // We have imported the ElementRef at the top which we have used in the constructor of the directive's definition class. We use ElementRef to inject a reference to the host DOM element in which we will use this directive. We've also imported HostListener and used it to define the events that will be initiated by user actions

@Directive({
  	selector: '[appCloneHighlighter]'
})
export class CloneHighlighterDirective {

  	constructor(private elem:ElementRef) {}

   // Used HostListenser 'mouseenter' to define the events that will be initiated by user actions
  	@HostListener('mouseenter') onMouseEnter() {
  		this.highlight('#1CAF9A'); // Changes the Highlight Color to #1CAf9A on mouseenter Event
  	}

  	@HostListener('mouseleave') onMouseLeave() {
  		this.highlight(null); // // Changes the Highlight Color to null on mouseleaves Event
  	}

  	private highlight(color: string) {
  		this.elem.nativeElement.style.backgroundColor = color;
  	}

}
