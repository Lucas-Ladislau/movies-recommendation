import API_KEY from '../APIS/tmdbapikey';

const tvrequests  = [
    {
        title : 'Ação e Aventura',
        url: `/discover/tv?api_key=${API_KEY}&with_genres=10759`,
        media: "tv"
    },
    {
        title : 'Animação',
        url: `/discover/tv?api_key=${API_KEY}&with_genres=16`,
        media: "tv"
    },
    {
        title : 'Drama ',
        url: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
        media: "tv"
    },
    {
        title : 'Comédia',
        url: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
        media: "tv"
    },
    {
        title : 'Família',
        url: `/discover/tv?api_key=${API_KEY}&with_genres=10751`,
        media: "tv"
    },
    {
        title : 'Crianças',
        url: `/discover/tv?api_key=${API_KEY}&with_genres=10762`,
        media: "tv"
    },
    {
        title : 'Mistério TV',
        url: `/discover/tv?api_key=${API_KEY}&with_genres=9648`,
        media: "tv"
    },
    {
        title : 'Investigação',
        url: `/discover/tv?api_key=${API_KEY}&with_genres=80`,
        media: "tv"
    },
    {
        title : 'Sci-Fi',
        url: `/discover/tv?api_key=${API_KEY}&with_genres=10765`,
        media: "tv"
    },
    {
        title : 'Guerras',
        url: `/discover/tv?api_key=${API_KEY}&with_genres=10768`,
        media: "tv"
    },
    {
        title : 'Western TV',
        url: `/discover/tv?api_key=${API_KEY}&with_genres=37`,
        media: "tv"
        
    }
]

export {tvrequests};