import api, { handleApiError } from "store/store";

export const searchMoviesByTitle = async (title: string) => {
  try {
    const response = await api.get('/search/movie', {
      params: { query: title },
    });
    return response.data.results;
  } catch (error: any) {
    handleApiError(error);
  }
};