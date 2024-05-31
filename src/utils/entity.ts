

import { MovieProps, RawData } from "screens/home/types";
import { getPosterImage } from './format';

export const processRawData = (data: RawData | RawData[]): MovieProps[]| MovieProps => {
  const processItem = (item: RawData): MovieProps => ({
    title: item.title || 'Unknown Title',
    id: item.id || 0,
    vote_average: Number(item?.vote_average?.toFixed(1)) || 0,
    overview: item?.overview || 'No overview',
    image: getPosterImage(item.poster_path) || 'default-image.png',
    genre_ids: item?.genre_ids || [],
  });

  if (Array.isArray(data)) {
    return data.map(processItem);
  } else {
    return processItem(data);
  }
};
