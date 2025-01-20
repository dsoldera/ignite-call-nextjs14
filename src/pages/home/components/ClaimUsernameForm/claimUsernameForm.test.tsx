import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { ClaimUsernameForm } from ".";
//import mockRouter from 'next-router-mock';

// const router =  vi.fn()
// const mockFn = router.mockImplementation(require('next-router'))

// eslint-disable-next-line @typescript-eslint/no-require-imports
vi.mock("next/router", () => require("next-router-mock"));
describe ('Claim Username Form Unit Test', () => {
  beforeEach(async () => {
    await render(<ClaimUsernameForm />)
  })

  it('Claim Username Form Input have the Placeholder', async () => {
    const input = screen.getByRole('textbox')
    await expect(input).toHaveProperty('placeholder', 'seu-usuário')
  })

  it('should be able to insert a value at input', async () => {
    const user = userEvent.setup()
    const input = await screen.findAllByRole('textbox')
    await user.type(input[0], 'dsoldera')
    await expect(input[0]).toHaveProperty('value', 'dsoldera')
  })

  it.todo('should be able to validate the username input', async () => {})

  it.todo('should go to register page when click at the button', async () => {})
})