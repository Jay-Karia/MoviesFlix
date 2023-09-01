const API_KEY = "5fc38b05bb7dc971aa7e587063d39302"

const baseURL = "https://api.themoviedb.org/3";

const requests = {
    fetchTrending: `${baseURL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchPopular: `${baseURL}/movie/popular?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `${baseURL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchAction: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=28&language=en-US`,
    fetchComedy: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=35&language=en-US`,
    fetchHorror: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=27&language=en-US`,
    fetchRomance: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=10749&language=en-US`,
    fetchDocumentary: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=99&language=en-US`,
    fetchNetFlixOriginals: `${baseURL}/discover/tv?api_key=${API_KEY}&with_networks=213`
}

export default requests