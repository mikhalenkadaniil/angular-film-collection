import { Component } from '@angular/core';
import { Header } from '../components/header/header';
import { links } from './app.routes';
import { RouterOutlet } from '@angular/router';
import { Footer } from "../components/footer/footer";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Header, RouterOutlet, Footer]
})
export class App {
  protected links = links;
}
