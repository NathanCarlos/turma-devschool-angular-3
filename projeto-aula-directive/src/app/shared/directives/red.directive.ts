import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.color = 'red';
    elementRef.nativeElement.innerText = 'Listageeeeeeeeeeeeeeeem';
    console.log(elementRef.nativeElement);
  }

}
