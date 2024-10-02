/**
 * *****************************************
 * 📝 UNCOMMENT THE PRACTICE SECTION CODE YOU WANT BELOW AND START YOUR SOLUTION
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

interface PaymentProcessor {
  processPayment(amount: number): void;
}

interface OnlinePaymentProcessor extends PaymentProcessor {}

class CreditCardPayment implements OnlinePaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing credit card payment of $${amount}`);
    console.log("Validating credit card details...");
    console.log("Charging the credit card...");
  }
}

class PayPalPayment implements OnlinePaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing PayPal payment of $${amount}`);
    console.log("Redirecting to PayPal...");
    console.log("Completing PayPal transaction...");
  }
}
class CashPayment implements PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing cash payment of $${amount}`);
    console.log("Payment received in cash.");
  }
}

function handleOnlinePayment(
  paymentProcessor: OnlinePaymentProcessor,
  amount: number
): void {
  if (paymentProcessor instanceof CashPayment) {
    throw new Error("Cannot process online payment in cash payment handler");
  }
  paymentProcessor.processPayment(amount);
}

function handleCashPayment(
  paymentProcessor: PaymentProcessor,
  amount: number
): void {
  if (!(paymentProcessor instanceof CashPayment)) {
    throw new Error("Cannot process cash payment in online payment handler");
  }
  paymentProcessor.processPayment(amount);
}

const creditCardPayment = new CreditCardPayment();
handleOnlinePayment(creditCardPayment, 100);

const payPalPayment = new PayPalPayment();
handleOnlinePayment(payPalPayment, 200);

const cashPayment = new CashPayment();
handleCashPayment(cashPayment, 50);

export {
  CreditCardPayment,
  PayPalPayment,
  CashPayment,
  handleOnlinePayment,
  handleCashPayment,
};
