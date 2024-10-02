import {
  EmailService,
  SendNotification,
  SMSService,
} from "../../Solid/5.Dip/main";
describe("Notification Services", () => {
  test("should send notification via email", () => {
    const emailService = new EmailService();
    const spy = jest.spyOn(console, "log");

    const emailNotification = new SendNotification(emailService);
    emailNotification.sendNotification("Email message");

    expect(spy).toHaveBeenCalledWith(
      "Sending email with message: Email message"
    );
    spy.mockRestore();
  });

  test("should send notification via SMS", () => {
    const smsService = new SMSService();
    const spy = jest.spyOn(console, "log");

    const smsNotification = new SendNotification(smsService);
    smsNotification.sendNotification("SMS message");

    expect(spy).toHaveBeenCalledWith("Sending SMS with message: SMS message");
    spy.mockRestore();
  });
});
