public with sharing class EditQuotePage_Ctrl {
    

    @AuraEnabled
    public static QuoteDto getQuote(String quoteId){
        try {
            Quote__c quote  = getQuoteFromDb(quoteId);
            QuoteDto qDto = new QuoteDto(quote);
            return qDto;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static Boolean updateQuote(String adjustQuoteJson ){
        try {
            AdjustQuote updatedQuote = (AdjustQuote) JSON.deserialize(adjustQuoteJson, AdjustQuote.class);
            Quote__c quote  = new Quote__c(Id = updatedQuote.recordId, start_date__c = Date.valueOf(updatedQuote.startDate), EndDate__c = Date.valueOf(updatedQuote.endDate) );
            QuoteDto qDto = new QuoteDto(quote);
            qDto.operationType = 'update';
            qDto.refreshSo();
            return true;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    private static Quote__c getQuoteFromDb(String quoteId){

        Quote__c[] quotes = [Select Id, Name, start_date__c, EndDate__c from Quote__c where Id= :quoteId];
        if(quotes.size()> 0){
            return quotes[0];
        }else {
            return null;
        }
    }

    public class AdjustQuote{
        @AuraEnabled
        public String startDate { get; set; }
        @AuraEnabled
        public String  endDate{ get; set; }
        @AuraEnabled
        public Id  recordId{ get; set; }
    }
}