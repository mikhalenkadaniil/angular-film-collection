export type Films = IFilm[];

export function isFilms(value: unknown): value is Films {
  return Array.isArray(value) && value.every(isFilm);
}

export interface IFilm {
  description: string;
  duration: number;
  genre: string;
  id: number;
  isFavorite: boolean;
  posterUrl: string;
  rating: number;
  title: string;
  year: number;
}

function isFilm(value: unknown): value is IFilm {
  if (typeof value !== "object" || value === null) return false;

  const film = value as Record<string, unknown>;

  return (
    typeof film['description'] === "string" &&
    typeof film['duration'] === "number" &&
    typeof film['genre'] === "string" &&
    typeof film['id'] === "number" &&
    typeof film['isFavorite'] === "boolean" &&
    typeof film['posterUrl'] === "string" &&
    typeof film['rating'] === "number" &&
    typeof film['title'] === "string" &&
    typeof film['year'] === "number"
  );
}
