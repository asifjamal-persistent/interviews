public with sharing class QuoteDto extends BaseDto {

  public QuoteDto() {
  }

  public QuoteDto(Quote__c quote) {
    super(quote);
    this.endDate = quote.EndDate__c;
    this.name = (String)sObj.get('Name');
    this.startDate = (Date)sObj.get('start_date__c');
    this.endDate = (Date)sObj.get('EndDate__c');
  }
  
  @AuraEnabled
  public String name { get; set; }
  @AuraEnabled
  public Date startDate { get; set; }
  @AuraEnabled
  public Date  endDate{ get; set; }
 

  public override SObject refreshSo() {
    if(isUpdate()){
      Update sObj;
      return sObj;
    }
    return null;
  }
}