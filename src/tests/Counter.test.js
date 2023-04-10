// import necessary react testing library helpers here
import { fireEvent, render, screen } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText("Counter");
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const counterValue = screen.getByTestId("count");
  expect(counterValue).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const counterValue = screen.getByTestId("count");

  fireEvent.click(screen.getByRole('button', {
    name: "+"
  }));
  expect(counterValue).toHaveTextContent("1");

  for (let i = 0; i < 5; ++i) {
    fireEvent.click(screen.getByRole('button', {
      name: "+"
    }));
    expect(counterValue).toHaveTextContent(2 + i);
  }
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const counterValue = screen.getByTestId("count");

  fireEvent.click(screen.getByRole('button', {
    name: "-"
  }));
  expect(counterValue).toHaveTextContent("-1");

  for (let i = 0; i < 5; ++i) {
    fireEvent.click(screen.getByRole('button', {
      name: "-"
    }));
    expect(counterValue).toHaveTextContent(-2 - i);
  }
});