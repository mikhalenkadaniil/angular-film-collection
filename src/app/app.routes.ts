import { Routes } from '@angular/router';
import { ILink } from '../components/header/header';
import { Home } from '../pages/home/home';
import { About } from '../pages/about/about';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'about',
    component: About,
  }
];

export const links: ILink[] = [
  {
    routerLink: `${routes[1].path}`,
    title: "Home",
  },
  {
    routerLink: `${routes[2].path}`,
    title: "About",
  },
];
