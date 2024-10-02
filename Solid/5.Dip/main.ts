/**
 * *****************************************
 * 📝 UNCOMMENT THE PRACTICE SECTION CODE YOU WANT BELOW AND START YOUR SOLUTION
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

interface NotificationService {
  send(message: string): void;
}

class EmailService implements NotificationService {
  send(message: string): void {
    console.log(`Sending email with message: ${message}`);
  }
}

class SMSService implements NotificationService {
  send(message: string): void {
    console.log(`Sending SMS with message: ${message}`);
  }
}

class SendNotification {
  private notificationService: NotificationService;

  constructor(notificationService: NotificationService) {
    this.notificationService = notificationService;
  }

  sendNotification(message: string): void {
    this.notificationService.send(message);
  }
}

const emailNotification = new SendNotification(new EmailService());
emailNotification.sendNotification("Hello, this is an email notification");

const smsNotification = new SendNotification(new SMSService());
smsNotification.sendNotification("Hello, this is an SMS notification");

export { EmailService, SMSService, SendNotification };
