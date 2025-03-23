public class EmailService {
    public class EmailData {
        public String senderName;
        public List<string> addresses;

        public Boolean isManual;
        public String subject;
        public String body;

        public Boolean isWhatId;
        public Id whatId;

        public Boolean isTemplateId;
        public Id templateId;
    }

    public static void sendEmails(List<EmailData> dataList) {
        List<Messaging.SingleEmailMessage> emailsWithToAddresses = new List<Messaging.SingleEmailMessage>();
        for (EmailData emailData : dataList) {
            Messaging.SingleEmailMessage email = new Messaging.SingleEmailMessage();
            email.setToAddresses(emailData.addresses);
            email.setSaveAsActivity(false);

            if (emailData.isWhatId) {
                email.setWhatId(emailData.whatId);  
            }

            if (emailData.isTemplateId) {
                email.setTemplateId(emailData.templateId);
            }

            if (emailData.isManual) {
                email.setSubject(emailData.subject);
                email.setPlainTextBody(emailData.body);
            }

            email.setSenderDisplayName(emailData.senderName);
            emailsWithToAddresses.add(email);
        }

        // The email template ID used for the email
        executeSendEmail(emailsWithToAddresses);
    }

    public static void executeSendEmail(List<Messaging.SingleEmailMessage> emailsWithToAddresses) {
        if (!emailsWithToAddresses.isEmpty()) {
            Messaging.sendEmail(emailsWithToAddresses);
        }
    }
}