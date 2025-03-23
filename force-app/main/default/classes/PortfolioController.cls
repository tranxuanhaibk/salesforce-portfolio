public with sharing class PortfolioController {
    @AuraEnabled
    public static List<Certification__c> getCerrtificates(){
        try {
            return [SELECT Id, Name, Cert_Image_Url__c, Issued_Date__c, User__c, Certification_Link__c FROM Certification__c ORDER BY Issued_Date__c DESC];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static List<Work_History__c> getWorkHistories(){
        try {
            return [
                SELECT Id, End_Date__c, Start_Date__c, Company_Name__c, 
                Description__c, Period_Time__c, Title__c, Skills__c, Company_Image_URL__c
                FROM Work_History__c ORDER BY Start_Date__c DESC];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }


    @AuraEnabled
    public static void handleContactMe(String email, String message, String guestName){
        try {
            Guest_Case__c gc = new Guest_Case__c(
                Email__c = email,
                Guest_Name__c = guestName,
                Message__c = message
            );

            insert gc;

            EmailTemplate tempplate = [SELECT Id FROM EmailTemplate WHERE DeveloperName = 'Contact_Me' LIMIT 1];

            sendEmail(gc.Id, tempplate.Id);
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    public static void sendEmail(Id objectId, Id templateId) {
        EmailService.EmailData data = new EmailService.EmailData();
        data.senderName = 'TXH-Ai System';
        data.addresses = new List<String>{'tranxuanhai.bkdn@gmail.com'};
        data.isManual = false;
        data.isWhatId = true;
        data.whatId = objectId;
        data.isTemplateId = true;
        data.templateId = templateId;

        EmailService.sendEmails(new List<EmailService.EmailData>{data});
    }
}