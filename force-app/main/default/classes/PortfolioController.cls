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
                SELECT Id, End_Date__c, Start_Date__c, Company_Name__c, Description__c, Period_Time__c, Title__c, Skills__c
                FROM Work_History__c ORDER BY Start_Date__c DESC];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

}