import { Routes } from '@angular/router';
import { ILink } from '../components/header/header';
import { FilmList } from '../components/film-list/film-list';
import { About } from '../pages/about/about';
import { Home } from '../pages/home/home';
import { FilmDetails } from '../components/film-details/film-details';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Home,
    children: [
      {
        path: '',
        redirectTo: 'film-list',
        pathMatch: 'full'
      },
      {
        path: 'film-list',
        component: FilmList,
      },
      {
        path: 'details/:id',
        component: FilmDetails,
      }
    ],
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
