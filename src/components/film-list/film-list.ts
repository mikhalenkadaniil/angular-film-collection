import { Component, inject, signal } from '@angular/core';
import { IOption, Sidebar } from '../sidebar/sidebar';
import { compass, star } from '../../assets/icons/icons';
import { StoreService } from '../../services/store.service';
import { Search } from '../../ui/search/search';
import { FilmCard } from '../film-card/film-card';
import { Router } from '@angular/router';

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
  selector: 'app-film-list',
  imports: [Sidebar, Search, FilmCard],
  templateUrl: './film-list.html',
  styleUrl: './film-list.scss',
})
export class FilmList {
  protected sections = sections;
  protected selected = signal<string>(sections[0].id);
  protected store = inject(StoreService);
  
  private router = inject(Router);

  protected onSelect(id: string) {
    this.selected.set(id);
  }

  onOpen (id: number) {
    this.router.navigate(['home/details', id]);
  }

  onToggleFavorite(id: number) {
    this.store.toggleFavorite(id);
  }

  onSearch(value: string) {
    this.store.search(value);
  }
}
