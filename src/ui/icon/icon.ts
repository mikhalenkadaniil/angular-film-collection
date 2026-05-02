import { Component, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-icon',
  imports: [],
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
})
export class Icon {
  svg = input.required<string>();
  sanitizer = inject(DomSanitizer)

  protected getHTML(icon: string) {
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  }
}
