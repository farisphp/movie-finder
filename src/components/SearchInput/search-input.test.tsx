import { render, screen } from '@testing-library/react'

import SearchInput from '.'

const inputProps = {
  defaultValue: 'naruto'
}

describe('<Logo />', () => {
  it('should render the logo', () => {
    const { container } = render(<SearchInput {...inputProps} />)

    expect(screen.getByRole('textbox')).toHaveValue(inputProps.defaultValue)

    expect(container.firstChild).toMatchSnapshot()
  })
})
