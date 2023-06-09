import SearchInput from 'components/SearchInput'

function HomePage() {
  return (
    <form
      className="relative mx-auto flex min-h-screen max-w-sm flex-col items-center justify-center space-y-8 px-5 sm:px-0"
      action="search"
    >
      <h1 className="text-4xl font-bold text-blue-950">Movie Finder</h1>
      <SearchInput />
    </form>
  )
}

export default HomePage
