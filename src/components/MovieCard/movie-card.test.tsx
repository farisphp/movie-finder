import { render, screen } from '@testing-library/react'

import MovieCard from '.'

const movieProps = {
  className: 'col-span-12 w-full md:col-span-6 lg:col-span-3',
  image: 'https://image.tmdb.org/t/p/w500//x31PQlhtamAz0FP2vprXImB5Yyn.jpg',
  title: 'The Movie Out Here',
  description:
    'Adam (Robin Nielsen) works as a junior associate for a large Toronto law firm. When a business trip takes him to his hometown of Fernie, he reunites with his old friends, Jason (Viv Leacock) and Theo (James Wallis). Adam gets more than he bargained for when he finds out that, due to a series of terrible business decisions, Theo\'s ski waxing business "Waxopolis" is in serious financial trouble and at risk of being taken over by an evil developer. The three guys hatch a plan to throw a massive fundraising party to try and save the business. But, with the developer and his son on their back, party permit hassles, and a Sasquatch on the loose, will they be able to pull it off?',
  isLoading: false
}

const skeletonProps = {
  className: 'col-span-12 w-full md:col-span-6 lg:col-span-3',
  isLoading: true
}

describe('<MovieCard />', () => {
  it('should render the skeleton loading of movie card', () => {
    const { container } = render(<MovieCard {...skeletonProps} />)
    const movieCard = container.getElementsByClassName('animate-pulse')

    expect(movieCard.item(0)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the movie detail correctly', () => {
    const { container } = render(<MovieCard {...movieProps} />)
    const description = container.getElementsByTagName('p')
    expect(screen.getByRole('img')).toHaveAttribute('src', movieProps.image)

    expect(
      screen.getByRole('heading', { name: movieProps.title, level: 3 })
    ).toBeInTheDocument()

    expect(description.item(0)).toHaveTextContent(movieProps.description)

    expect(container.firstChild).toMatchSnapshot()
  })
})
