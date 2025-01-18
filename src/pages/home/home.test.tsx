import { render, screen } from "@testing-library/react"
import { beforeEach, describe, expect, it } from "vitest"
import Home from "."

describe ('Home Page Unit Test', () => {
  beforeEach(async () => {
    render(<Home />)
  })

  it('Home Page Heading should exist', async () => {
    const heading = screen.getByRole('heading', { level: 1, name: 'Agendamento descomplicado' })
    await expect(heading).toBeDefined()
  })

  it.skip('Home Page Image should have Alt', async () => {})
})