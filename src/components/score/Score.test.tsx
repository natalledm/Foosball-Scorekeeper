import { fireEvent, render } from "@testing-library/react";
import Score from "./Score";

test("the score should change when player1 scores", () => {
  const { getByText } = render(<Score />);
  const initialScore = getByText(/0 x 0/);
  expect(initialScore).toBeInTheDocument();

  const player1Button = getByText(/\+1 Player One/);
  expect(player1Button).toBeInTheDocument();
  fireEvent.click(player1Button);

  const newScore = getByText(/1 x 0/);
  expect(newScore).toBeInTheDocument();
});
