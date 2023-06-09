import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import Pagination from '.'

describe('<Pagination />', () => {
  it('should render the pagination with 1 page', () => {
    const { container } = render(
      <Pagination
        url="http://127.0.0.1:5173/search?q=naruto&p=1"
        totalItems={10}
        page={1}
        size={20}
      />,
      { wrapper: BrowserRouter }
    )

    expect(screen.getByRole('link', { name: '1' })).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: '2' })).not.toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the pagination with 2 page', () => {
    const { container } = render(
      <Pagination
        url="http://127.0.0.1:5173/search?q=naruto&p=1"
        totalItems={30}
        page={1}
        size={20}
      />,
      { wrapper: BrowserRouter }
    )

    expect(screen.getByRole('link', { name: '1' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '2' })).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: '3' })).not.toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the pagination with 10 page', () => {
    const { container } = render(
      <Pagination
        url="http://127.0.0.1:5173/search?q=naruto&p=1"
        totalItems={1000}
        page={1}
        size={20}
      />,
      { wrapper: BrowserRouter }
    )

    expect(screen.getByRole('link', { name: '1' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '10' })).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: '11' })).not.toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the pagination with previous link', () => {
    const { container } = render(
      <Pagination
        url="http://127.0.0.1:5173/search?q=naruto&p=1"
        totalItems={50}
        page={2}
        size={20}
      />,
      { wrapper: BrowserRouter }
    )

    expect(screen.getByRole('link', { name: 'Prev' })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the pagination with next link', () => {
    const { container } = render(
      <Pagination
        url="http://127.0.0.1:5173/search?q=naruto&p=1"
        totalItems={30}
        page={1}
        size={20}
      />,
      { wrapper: BrowserRouter }
    )

    expect(screen.getByRole('link', { name: 'Next' })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
