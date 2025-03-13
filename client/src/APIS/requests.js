// const API_KEY = "d0dab44439b549cc879a1496d1bbe683";

import API_KEY from '../APIS/tmdbapikey'

const requests = [
  {
    title: "Últimos Lançamentos",
    url: `/trending/movie/day?api_key=${API_KEY}`,
    media: "movie"
  },
  {
    title: "Comédia",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    media: "movie"
  },
  {
    title: "Ação",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    media: "movie"
  },
  {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    media: "movie",
  },
  {
    title: "Animação",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    media: "movie"
  },
  {
    title: "Séries",
    url: `/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc`,
    media: "tv"
  },
  {
    title: "Investigação",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
    media: "movie"
  },
  {
    title: "Séries Populares",
    url: `/trending/tv/day?api_key=${API_KEY}`,
    media: "tv"
  }
  
];

const getRecommendationsUrl = (movieId) => 
  `/movie/${movieId}/recommendations?api_key=${API_KEY}`;

const languageRequest = {
  title :"SpecificLanguage",
  url:`/discover/movie?api_key=${API_KEY}&with_original_language`,
  media : 'Movie'
}

export {requests,languageRequest,API_KEY, getRecommendationsUrl};
