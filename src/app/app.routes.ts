import { Routes } from '@angular/router';
import { ILink } from '../components/header/header';
import { Home } from '../pages/home/home';
import { About } from '../pages/about/about';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'about',
    component: About,
  }
];

export const links: ILink[] = [
  {
    routerLink: `${routes[0].path}`,
    title: "Home",
  },
  {
    routerLink: `${routes[1].path}`,
    title: "About",
  },
];
