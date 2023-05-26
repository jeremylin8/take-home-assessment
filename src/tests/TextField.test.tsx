import TextField from '../components/fields/TextField'
import { render } from './testing-lib'

describe('TextField', () => {
  it('render the TextField', () => {
    render(<TextField name="1" onChange={() => null} />)
    const btnIncrement = screen.getByTestId('btn-increment')
    fireEvent.click(btnIncrement)
    expect(screen.getBy).toBeInTheDocument()
  })
})
