import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BandForm from "../components/BandForm";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

const mockTicketTypes = [
  {
    type: "regular",
    name: "Regular Ticket",
    description: "Standard access",
    cost: 3000,
  },
  { type: "vip", name: "VIP Ticket", description: "VIP access", cost: 5000 },
];

const setup = () => {
  render(
    <ThemeProvider theme={theme}>
      <BandForm ticketTypes={mockTicketTypes} />
    </ThemeProvider>
  );
};

describe("Band Form", () => {
  it("renders the form correctly", () => {
    setup();

    expect(screen.getByTestId("regular-quantity-input")).toBeInTheDocument();
    expect(screen.getByTestId("first-name-input")).toBeInTheDocument();
    expect(screen.getByTestId("last-name-input")).toBeInTheDocument();
    expect(screen.getByTestId("address-input")).toBeInTheDocument();
    expect(screen.getByTestId("total-container")).toBeInTheDocument();
    expect(screen.getByTestId("credit-card-number-input")).toBeInTheDocument();
    expect(screen.getByTestId("expiration-date-input")).toBeInTheDocument();
    expect(screen.getByTestId("cvv-input")).toBeInTheDocument();
  });

  it("updates the ticket quantity by the correct amount", () => {
    setup();

    const ticketInput = screen.getByTestId("regular-quantity-input");

    expect(ticketInput).toHaveValue(0);

    fireEvent.change(ticketInput, { target: { value: "2" } });

    expect(ticketInput).toHaveValue(2);
  });

  it("shows the correct total cost when tickets are selected", () => {
    setup();

    expect(screen.getByText("$0.00")).toBeInTheDocument();

    const ticketInput = screen.getByTestId("regular-quantity-input");
    fireEvent.change(ticketInput, { target: { value: "2" } });

    expect(screen.getByText("$60.00")).toBeInTheDocument();
  });

  it("disables the Get Tickets button if no tickets are selected", async () => {
    setup();

    const ticketInput = screen.getByTestId("regular-quantity-input");

    expect(ticketInput).toHaveValue(0);

    await waitFor(() => {
        const submitButton = screen.getByRole("button", { name: /Get Tickets/i });
        expect(submitButton).toBeDisabled();
      });
  });

  it("enables the submit button when all the fields are valid", async () => {
    setup();
    const ticketInput = screen.getByTestId("regular-quantity-input");
    const firstNameInput = screen.getByTestId("first-name-input");
    const lastNameInput = screen.getByTestId("last-name-input");
    const addressInput = screen.getByTestId("address-input");
    const creditCardInput = screen.getByTestId("credit-card-number-input");
    const expirationDateInput = screen.getByTestId("expiration-date-input");
    const cvvInput = screen.getByTestId("cvv-input");

    fireEvent.change(ticketInput, { target: { value: "2" } });
    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(lastNameInput, { target: { value: "Johnson" } });
    fireEvent.change(addressInput, { target: { value: "123 Johnson Street" } });
    fireEvent.change(creditCardInput, {
      target: { value: "0000000000000000" },
    });
    fireEvent.change(expirationDateInput, { target: { value: "12/27" } });
    fireEvent.change(cvvInput, { target: { value: "123" } });

    await waitFor(() => {
      const submitButton = screen.getByRole("button", { name: /Get Tickets/i });
      expect(submitButton).not.toBeDisabled();
    });
  });
});
