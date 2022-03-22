import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class AppRedDirective {

  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.color = 'red';
  }

}
