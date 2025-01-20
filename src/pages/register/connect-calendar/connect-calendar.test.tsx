import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import Register from "./index.page";

//vi.mock("next/router", () => require("next-router-mock"));
describe ('Calendar Connect Register Step', () => {
  beforeEach(async () => {
    render(<Register />)
  })

  it('Connect Calendar should be rendered', async () => {
    const heading = screen.getByRole('heading', { level: 1, name: 'Conecte sua agenda!' })
    await expect(heading).toBeDefined()
 })

 it.todo('Connect Calendar should connect to Google Calendar', async () => {})

 it.todo('Connectar Calendar should go to the next Step', async () => {})
})