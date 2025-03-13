import API_KEY from '../APIS/tmdbapikey';

const moviesrequest  = [
    {
        title: "Populares",
        url: `/trending/movie/day?api_key=${API_KEY}`,
        media: "movie",
    },    
    {
        title: "Comédia",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
        media: "movie",
    },
    {
        title: "Ação",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
        media: "movie",
    },
    {
        title: "Romance",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
        media: "movie",
    },
    {
        title: "Horror",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
        media: "movie",
    },
    {
        title: "Aventura",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
        media: "movie",
    },
    {
        title: "Investigação",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
        media: "movie"
    },
    {
        title: "Família",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
        media: "movie",
    },
    {
        title: "Documentário",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
        media: "movie",
    },
    {
        title: "Ficção Científica",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
        media: "movie",
    },
    {
        title: "Animação",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
        media: "movie",
    },
    {
        title: "Drama",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
        media: "movie"
    },    
    {
        title: "Thriller",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
        media: "movie"
    }
    
]

export {moviesrequest};