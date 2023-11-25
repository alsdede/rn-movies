import { MediaType, TrendingResult } from '@/@types/trendings';

const API_KEY = process.env.EXPO_PUBLIC_KEY;
const language = 'en-US';

export const getTrending = async (
  page: number = 1,
  mediaType: MediaType = MediaType.Movie
): Promise<TrendingResult> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?language=${language}&api_key=${API_KEY}`
  );
  const data = await response.json();

  return data;
};

export const getSearchResults = async (query: string): Promise<TrendingResult> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/multi?language=${language}&api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();

  return data;
};

export const getMovieDetails = async (id: number, type: MediaType): Promise<any> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/${type}/${id}?language=${language}&api_key=${API_KEY}`
  );
  const data = await response.json();

  return data;
};
