import { Injectable, resource } from '@angular/core';
import { environments } from '../environments/environments';
import { isFilms } from '../model/films';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  filmResource = resource({
    loader: async () => {
      const response = await fetch(environments.apiUrl);
      
      if (!response.ok) {
        throw new Error ('Network error');
      }

      const data = await response.json();
      
      if (isFilms(data)) return data;

      throw new Error('Invalid data type');
    }
  });
}
