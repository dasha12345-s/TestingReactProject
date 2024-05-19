import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe('Anync comp[onent', () => {
  test('renders posts if request sended', async () => {
    render(<Async/>)

    const listItemElement = await screen.findAllByRole('listitem');
    expect(listItemElement).not.toHaveLength(0);
  });
});