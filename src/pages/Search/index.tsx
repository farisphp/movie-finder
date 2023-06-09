import {
  useSearchParams,
  useNavigate,
  Link,
  useLocation
} from 'react-router-dom'
import { Fragment, useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { searchMovies } from 'apis/movies'
import SearchInput from 'components/SearchInput'
import MovieCard from 'components/MovieCard'
import Pagination from 'components/Pagination'
import Logo from 'components/Logo'
import { generatePosterUrl } from 'utils'
import { MovieList } from 'types/movie'

const PAGE_SIZE = 20

function SearchPage() {
  const location = useLocation()
  const [searchValue, setSearchValue] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const query = searchParams.get('q') as string
  const page = Number(searchParams.get('p')) || 1

  const { data, isLoading } = useQuery<MovieList>(
    `movies-${query}-${page}`,
    () => searchMovies(query, page),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false
    }
  )

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [location])

  useEffect(() => {
    // Redirect to homepage if query param is empty
    if (!query || query === '') navigate('/', { replace: true })
  }, [query, page, navigate])

  return (
    <div className="mx-auto  min-h-screen max-w-7xl space-y-5 px-5 py-4 xl:px-0">
      <Link to="/">
        <Logo />
      </Link>
      <SearchInput
        onSubmit={(event) => {
          event.preventDefault()
          setSearchParams({ q: searchValue })
        }}
        defaultValue={query}
        onInputChange={(event) => setSearchValue(event.target.value)}
      />
      {isLoading ? (
        <Fragment>
          <span className="block w-full font-light">Searching</span>
          <div className="grid grid-cols-12 gap-3">
            {[0, 1, 2, 3].map((item, index: number) => {
              return (
                <MovieCard
                  key={`movie-${index}`}
                  className="col-span-12 w-full md:col-span-6 lg:col-span-3"
                  isLoading
                />
              )
            })}
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <span className="block w-full font-light">
            Found {data?.total_results} movies
          </span>
          <div className="grid grid-cols-12 gap-3">
            {data?.results?.map((item, index: number) => {
              return (
                <MovieCard
                  key={`movie-${index}`}
                  className="col-span-12 w-full md:col-span-6 lg:col-span-3"
                  image={
                    generatePosterUrl(item.poster_path, 'w500') ||
                    'https://placehold.co/400x600?text=Movie'
                  }
                  title={item.title}
                  description={item.overview}
                />
              )
            })}
          </div>
          <Pagination
            url={window.location.toString()}
            totalItems={data?.total_results || 0}
            page={page}
            size={PAGE_SIZE}
          />
        </Fragment>
      )}
    </div>
  )
}

export default SearchPage
