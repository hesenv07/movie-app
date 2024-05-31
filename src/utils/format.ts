import { TMDB_IMAGE_BASE_URL } from "config";

export const getPosterImage = (path:string) => `${TMDB_IMAGE_BASE_URL}/original${path}`;
