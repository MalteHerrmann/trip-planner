import {render, screen} from '@testing-library/react'
import AddTripBox from "./AddTripBox";

it("Should render AddTripBox to screen", () => {
    render(<AddTripBox />);
    const addedTripBox = screen.getByText(/\+/i);
    expect(addedTripBox).toBeInTheDocument();
});

// Test the AddTripBox component
it("Should render AddTripDialog to screen when clicking the add button", () => {
    render(<AddTripBox />);
    const addedTripBox = screen.getByText(/\+/i);
    addedTripBox.click();
    const addedTripDialog = screen.getByText(/Add to trip/i);
    expect(addedTripDialog).toBeInTheDocument();
});

