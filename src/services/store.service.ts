import { computed, Injectable, signal } from '@angular/core';
import { ApiService } from './api.service';
import { Films, isFilms } from '../model/films';
import { isError } from '../guards/is-error';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  readonly isError = computed(() => this._isError());
  readonly isLoading = computed(() => this._isLoading())
  readonly films = computed(() => 
    [...this._films()]
    .filter((film) => 
      film.title
      .toLocaleLowerCase()
      .includes(this.searchingValue().toLowerCase())
    ));
  readonly favoritesFilms = computed(
    () => this.films()
    .filter((film) => film.isFavorite)
    .filter((film) => 
      film.title
      .toLocaleLowerCase()
      .includes(this.searchingValue().toLowerCase())
    ));
  readonly errorMessage = computed(() => this._errorMessage());

  private api = new ApiService();
  private searchingValue = signal<string>('');
  private _errorMessage = signal<string>('');
  private _films = signal<Films>([]);
  private _isLoading = signal<boolean>(true);
  private _isError = signal<boolean>(false);
  
  constructor() {
    this.loadFilms();
  }

  toggleFavorite(id: number) {
    this._films.update((films) =>
      films.map(film =>
        film.id === id
          ? { ...film, isFavorite: !film.isFavorite }
          : film
      )
    );
  }

  search(value: string) {
    this.searchingValue.set(value);
  }

  private async loadFilms() {
    try {
      const data = await this.api.loadData();
      if (isFilms(data)) {
        this._films.set(data);
        this._isLoading.set(false);
      }
      throw new Error('Invalid data type');
    } catch (error: unknown) {
      this.handleError(error);
    }
  }

  private handleError(error: unknown) {
    this._isLoading.set(false);
    this._isError.set(true);
    if (isError(error)) {
      this._errorMessage.set(error.message);
    } else {
      this._errorMessage.set('Unknown error');
    }
  }
}
