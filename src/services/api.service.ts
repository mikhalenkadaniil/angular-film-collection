import { Injectable, signal } from '@angular/core';
import { environments } from '../environments/environments';
import { Films, isFilms } from '../model/films';
import { isError } from '../guards/isError';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  isLoading = signal<boolean>(true);
  isError = signal<boolean>(false);
  films = signal<Films>([]);
  errorMessage = signal<string>('');

  constructor() {
    try {
      this.loadFilms();
    } catch(error) {
      this.handleError(error);
    }
  }

  private async loadFilms() {
    const response = await fetch(environments.apiUrl);
      
      if (!response.ok) {
        throw new Error ('Network error');
      }

      const data = await response.json();
      
      if (isFilms(data)) {
        this.films.set(data);
        this.isLoading.set(false);
      }

      throw new Error('Invalid data type');
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
