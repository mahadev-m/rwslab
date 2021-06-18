import { render } from '@redwoodjs/testing'

import EngineeringPage from './EngineeringPage'

describe('EngineeringPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EngineeringPage />)
    }).not.toThrow()
  })
})
