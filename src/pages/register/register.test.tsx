import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import Register from "./index.page";

vi.mock("next/router", () => require("next-router-mock"));
describe ('Register Form Unit Test', () => {
  beforeEach(async () => {
    render(<Register />)
  })

  it('Register Form should be rendered', async () => {
     const heading = screen.getByRole('heading', { level: 1, name: 'Bem-vindo ao Ignite Call!' })
     await expect(heading).toBeDefined()
  })

  it.todo('Register Form should be validate', async () => {})

  it.todo('Register Form should go to the next step', async () => {})
})

/**
 * import mockRouter from 'next-router-mock';
 * it('NextLink can be rendered', () => {
 *  fireEvent.click(screen.getByText('Example Link'));
 *  expect(mockRouter.asPath).toEqual('/example')
 * });
 */