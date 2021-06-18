import { render } from '@redwoodjs/testing'

import CompanyPage from './CompanyPage'

describe('CompanyPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CompanyPage />)
    }).not.toThrow()
  })
})
