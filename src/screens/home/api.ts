import api, { handleApiError } from "store/store";

export enum MovieCategory {
    NOW_PLAYING = 'now_playing',
    POPULAR = 'popular',
    UPCOMING = 'upcoming',
  }

  // Fetch movies by category
export const fetchMoviesWithCategory = async (category: MovieCategory) => {
  try {
    const response = await api.get(`/movie/${category}`);
    return response.data.results;
  } catch (error: any) {
    handleApiError(error);
  }
};


export const fetchCategory= async () => {
  try {
    const response = await api.get(`/genre/movie/list`);
    return response?.data?.genres;
  } catch (error: any) {
    handleApiError(error);
  }
};