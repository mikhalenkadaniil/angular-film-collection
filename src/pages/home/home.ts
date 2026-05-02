import { Component } from '@angular/core';
import { IOption, Sidebar } from '../../components/sidebar/sidebar';
import { compass, star } from '../../assets/icons/icons';

const sections: IOption[] = [
  {
    icon: compass,
    label: 'Explore',
    id: 'explore',
  },
  {
    icon: star,
    label: 'Favorites',
    id: 'favorites',
  }
];

@Component({
  selector: 'app-home',
  imports: [Sidebar],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  sections = sections;
}
