import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const bookingData = {
  date: "",
  times: "",
  guests: "",
  occasion: "",
};

const availableTimes = {
  times: ["17:00", "17:30", "18:50", "19:00", "20:00", "21:00", "22:00", "23:00"],

};

test("Renders the BookingForm heading", () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const headingElement = screen.getByText("Reserve Table");
  expect(headingElement).toBeInTheDocument();

})
test("check  Available Times", () => {
  expect(availableTimes.times[0]).toBe("17:00");
});


test('Initialize/Update Times', () => {
  render(
    <Router>
      <App />
    </Router>
);
  const reserveButton = screen.getByTestId("button");
  fireEvent.click(reserveButton);

  const testTime = []
  userEvent.selectOptions(screen.getByTestId("book-time"),screen.getByTestId('option', { name: testTime }))
  expect(screen.getByTestId('option', { name: testTime }).selected).toBe(true);
})