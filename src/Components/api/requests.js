const requests = {
    fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchAction: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28&language=en-US`,
    fetchComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35&language=en-US`,
    fetchHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27&language=en-US`,
    fetchRomance: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749&language=en-US`,
    fetchDocumentary: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99&language=en-US`
}

export default requests