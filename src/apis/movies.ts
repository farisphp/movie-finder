import api from 'libs/api'

interface IMoviesAPI {
  query: string
  page: number
}

export async function searchMovies(query: string, page: number) {
  const { data } = await api.get(`/search/movie?query=${query}&page=${page}`)
  return data
}
