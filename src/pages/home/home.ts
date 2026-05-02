import { Component, inject, signal } from '@angular/core';
import { IOption, Sidebar } from '../../components/sidebar/sidebar';
import { compass, star } from '../../assets/icons/icons';
import { StoreService } from '../../services/store.service';
import { Search } from '../../ui/search/search';
import { FilmCard } from '../../components/film-card/film-card';

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
  imports: [Sidebar, Search, FilmCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected sections = sections;
  protected selected = signal<string>(sections[0].id);
  protected store = inject(StoreService);

  protected onSelect(id: string) {
    this.selected.set(id);
  }

  onOpen (id: number) {
    console.log(id, 'open');
  }

  onToggleFavorite(id: number) {
    this.store.toggleFavorite(id);
  }

  onSearch(value: string) {
    this.store.search(value);
  }
}
