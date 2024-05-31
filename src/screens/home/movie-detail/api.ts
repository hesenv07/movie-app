import api, { handleApiError } from "store/store";

export const fetchMovieDetails = async (id: number) => {
    try {
      const response = await api.get(`/movie/${id}`);
      return response.data;
    } catch (error: any) {
      handleApiError(error);
    }
  };

  export const fetchMovieCast = async (id: number) => {
    try {
      const response = await api.get(`/movie/${id}/credits`);
      return response.data.cast;
    } catch (error: any) {
      handleApiError(error);
    }
  };