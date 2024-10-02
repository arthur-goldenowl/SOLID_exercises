import {
  CreditCardPayment,
  PayPalPayment,
  CashPayment,
  handleOnlinePayment,
  handleCashPayment,
} from "../../Solid/3.Lsp/main";

describe("Payment Processor", () => {
  test("should process credit card payment", () => {
    const creditCardPayment = new CreditCardPayment();
    const spy = jest.spyOn(console, "log");
    handleOnlinePayment(creditCardPayment, 100);
    expect(spy).toHaveBeenCalledWith("Processing credit card payment of $100");
    spy.mockRestore();
  });

  test("should process PayPal payment", () => {
    const payPalPayment = new PayPalPayment();
    const spy = jest.spyOn(console, "log");
    handleOnlinePayment(payPalPayment, 200);
    expect(spy).toHaveBeenCalledWith("Processing PayPal payment of $200");
    spy.mockRestore();
  });

  test("should process cash payment", () => {
    const cashPayment = new CashPayment();
    const spy = jest.spyOn(console, "log");
    handleCashPayment(cashPayment, 50);
    expect(spy).toHaveBeenCalledWith("Processing cash payment of $50");
    spy.mockRestore();
  });

  test("should throw an error for cash payment in online handler", () => {
    const cashPayment = new CashPayment();
    expect(() => handleOnlinePayment(cashPayment as any, 50)).toThrow();
  });

  test("should throw an error for online payment in cash handler", () => {
    const creditCardPayment = new CreditCardPayment();
    expect(() => handleCashPayment(creditCardPayment as any, 100)).toThrow();
  });
});
