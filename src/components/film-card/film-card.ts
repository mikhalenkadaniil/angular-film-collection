import { Component, computed, input, output } from '@angular/core';
import { IFilm } from '../../model/films';
import { Icon } from '../../ui/icon/icon';
import { star } from '../../assets/icons/icons';

@Component({
  selector: 'app-film-card',
  imports: [Icon],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
})
export class FilmCard {
  data = input.required<IFilm>();
  protected icon = star;
  protected iconStatus = computed(() => this.data().isFavorite ? 'active' : '')
  toggleFavoriteEvent = output<number>();
  openEvent = output<number>();


  toggleFavorite(event: Event) {
    event.stopPropagation();
    this.toggleFavoriteEvent.emit(this.data().id);
  }

  open() {
    this.openEvent.emit(this.data().id);
  }
}
