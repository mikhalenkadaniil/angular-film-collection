import { Component } from '@angular/core';
import { Breadcrumbs } from "../../components/breadcrumbs/breadcrumbs";

@Component({
  selector: 'app-about',
  imports: [Breadcrumbs],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
