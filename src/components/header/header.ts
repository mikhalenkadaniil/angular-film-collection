import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

export interface ILink {
  routerLink: string;
  title: string;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  links = input.required<ILink[]>();
}
