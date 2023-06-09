import { useRouteError } from 'react-router-dom'

interface RouteError {
  statusText: string
  message: string
}

function ErrorPage() {
  const error = useRouteError() as RouteError
  console.error(error)

  return (
    <div
      id="error-page"
      className="mx-auto flex h-screen max-w-sm flex-col items-center justify-center space-y-3"
    >
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage
