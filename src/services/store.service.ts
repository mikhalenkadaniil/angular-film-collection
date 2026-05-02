import { computed, inject, Injectable, signal } from '@angular/core';
import { ApiService } from './api.service';
import { Films, isFilms } from '../model/films';
import { isError } from '../guards/isError';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private api = new ApiService();
  isLoading = signal<boolean>(true);
  isError = signal<boolean>(false);
  films = signal<Films>([]);
  favoritesFilms = computed(
    () => this.films()
            .filter((film) => film.isFavorite)
  );
  errorMessage = signal<string>('');
  
  constructor() {
    this.loadFilms();
  }

  private async loadFilms() {
    try {
      const data = await this.api.loadData();
      if (isFilms(data)) {
        this.films.set(data);
        this.isLoading.set(false);
      }
      throw new Error('Invalid data type');
    } catch (error: unknown) {
      this.handleError(error);
    }
  }

  private handleError(error: unknown) {
    this.isLoading.set(false);
    this.isError.set(true);
    if (isError(error)) {
      this.errorMessage.set(error.message);
    } else {
      this.errorMessage.set('Unknown error');
    }
  }
}
