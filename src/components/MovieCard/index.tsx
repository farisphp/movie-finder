import classnames from 'classnames'

import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from 'ui/card'

interface IMovieCard extends React.HTMLAttributes<HTMLDivElement> {
  image?: string
  title?: string
  description?: string
  isLoading?: boolean
}

/* Will render skeleton loading when isLoading is true */
function MovieCard({
  className,
  image,
  title,
  description,
  isLoading = false
}: IMovieCard) {
  return (
    <Card className={classnames({ 'animate-pulse': isLoading }, className)}>
      <CardContent>
        {isLoading ? (
          <div className="h-[400px] w-full bg-gray-700" />
        ) : (
          <img
            className="h-[400px] w-full"
            style={{ objectFit: 'cover' }}
            src={image}
            alt={title}
          />
        )}
      </CardContent>
      <CardFooter>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardFooter>
    </Card>
  )
}

export default MovieCard
