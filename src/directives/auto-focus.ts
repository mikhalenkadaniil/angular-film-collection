import { Directive, ElementRef, inject, OnInit } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocus implements OnInit {

  private element = inject(ElementRef);

  ngOnInit(): void {
    this.element.nativeElement.focus();
  }

}
