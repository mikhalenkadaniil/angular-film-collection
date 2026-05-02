import { environments } from '../environments/environments';

export class ApiService {
  async loadData() {
    const response = await fetch(environments.apiUrl);

      if (!response.ok) {
        throw new Error ('Network error');
      }

      const data = await response.json();
      return data;
  }
}
