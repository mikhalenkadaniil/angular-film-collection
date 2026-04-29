import { Component, input, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

export interface ILink {
  routerLink: string;
  title: string;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  links = input.required<ILink[]>();
}
