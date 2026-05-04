import { AfterViewChecked, AfterViewInit, Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocus implements AfterViewChecked {

  private element = inject(ElementRef);

  ngAfterViewChecked(): void {
    this.element.nativeElement.focus();
  }

}
