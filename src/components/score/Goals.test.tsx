import { render } from "@testing-library/react";
import Goals from "./Goals";

test("renders without exploding", () => {
  const { getByText } = render(<Goals player1={2} player2={5} />);
  const scoreText = getByText(/2 x 5/);
  expect(scoreText).toBeInTheDocument();
});
