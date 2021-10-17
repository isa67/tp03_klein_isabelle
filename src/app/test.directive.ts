import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTest]',
})
export class TestDirective {
  constructor(private elementRef: ElementRef) {}
  @HostListener('change')
  onChange() {
    console.log('test');
    if (this.elementRef.nativeElement.value != 'nom') {
      this.elementRef.nativeElement.style.backgroundColor = 'red';
    } else {
      this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
  }
  @Input() appTest: boolean;
  
}
