import { vi } from 'vitest'

import BooleanField from '../components/fields/BooleanField'
import { render, screen, fireEvent } from './testing-lib'

const question = {
  id: 3,
  title: 'Is Tennessee a state in the United States?',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sint ex odio et consectetur ullam placeat ea in alias corporis quam, facilis fugiat ipsum, adipisci veritatis, quas natus ipsam nam repellat aliquid expedita. Accusamus non provident perspiciatis nostrum!',
  type: 'boolean',
}

describe('BooleanField', () => {
  it('buttons should be clickable', () => {
    const yes = screen.getByText('Yes')
    render(<BooleanField name={question.id.toString()} onChange={vi.fn()} />)
    fireEvent.click(yes)
  })
})
