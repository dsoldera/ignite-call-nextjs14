import { render, screen } from "@testing-library/react"
import { beforeEach, describe, expect, it } from "vitest"
import Register from "./index.page"

describe ('Register Form Unit Test', () => {
  beforeEach(async () => {
    render(<Register />)
  })

  it('Register Form should be rendered', async () => {
     const heading = screen.getByRole('heading', { level: 1, name: 'Bem-vindo ao Ignite Call!' })
     await expect(heading).toBeDefined()
  })

  it.todo('Register Form should have an Input field', async () => {})

  it.todo('Register Form should be possible to be validated', async () => {})
})