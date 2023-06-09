import SearchInput from 'components/SearchInput'
import Logo from 'components/Logo'

function HomePage() {
  return (
    <div className="relative mx-auto flex min-h-screen max-w-sm flex-col items-center justify-center space-y-8 px-5 sm:px-0">
      <Logo />
      <SearchInput wrapperClass="w-full" formAction="search" />
    </div>
  )
}

export default HomePage
