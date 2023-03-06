/*
 * Provus Services Quoting
 * Copyright (c) 2023 Provus Inc. All rights reserved.
 */

import { LightningElement, api } from "lwc";
import updateQuote from "@salesforce/apex/EditQuotePage_Ctrl.updateQuote";
import { showMessage } from 'c/utilityComponent';

export default class EditQuotePage extends LightningElement {
  @api recordId;
  updatedQutoes = {};
  onSave(event){
        this.updatedQutoes = event.detail;
        this.updatedQutoes['recordId'] = this.recordId;
        this.saveUpdatedQuotes();
  }
  
  saveUpdatedQuotes() {
    updateQuote({ adjustQuoteJson: JSON.stringify(this.updatedQutoes) })
          .then(result => {
            showMessage(this, 'Success', 'Quote successfully updated', 'success');

            setTimeout(() => {
              this.template.querySelector('c-quote-total-summary').refresh(); 
              this.template.querySelector('c-edit-quote').refresh(); 
            }, 5000); 
           
          }) 
          .catch(error => {
              this.error = error;
              this.property = undefined;
          });
  }
}