import Home from '@/pages/index.page'
import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
 
test('Page', () => {
  render(<Home />)
  expect(screen.getByRole('heading', { level: 1, name: 'Hello World' })).toBeDefined()
})