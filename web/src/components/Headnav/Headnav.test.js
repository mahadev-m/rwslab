import { render } from '@redwoodjs/testing'

import Headnav from './Headnav'

describe('Headnav', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Headnav />)
    }).not.toThrow()
  })
})
