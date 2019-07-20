import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  	selector: '[appCloneHighlighter]'
})
export class CloneHighlighterDirective {

  	constructor(private elem:ElementRef) {}

  	@HostListener('mouseenter') onMouseEnter() {
  		this.highlight('#1CAF9A');
  	}

  	@HostListener('mouseleave') onMouseLeave() {
  		this.highlight(null);
  	}

  	private highlight(color: string) {
  		this.elem.nativeElement.style.backgroundColor = color;
  	}

}
