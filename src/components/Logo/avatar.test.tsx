import { render, screen } from '@testing-library/react'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the logo', () => {
    const { container } = render(<Logo />)

    expect(
      screen.getByRole('heading', { name: /Movie Finder/i, level: 1 })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
