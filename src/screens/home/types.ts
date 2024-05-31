export interface MovieProps {
  title: string;
  id: number;
  image: string;
  vote_average?: number;
  overview?: string;
  genre_ids: number[];
}

export interface RawData {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface CategoryMovie {
  id: number;
  name: string;
}