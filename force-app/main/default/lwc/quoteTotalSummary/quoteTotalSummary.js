/*
 * Provus Services Quoting
 * Copyright (c) 2023 Provus Inc. All rights reserved.
 */

import { LightningElement, api } from "lwc";

export default class QuoteTotalSummary extends LightningElement {

    isClicked = false;
    @api updatedQuote = {};
    handleSave(){  
      this.getDataFromCLient();
    }
  
    getDataFromCLient(){
     let collectionList = this.template.querySelectorAll('lightning-input');
    collectionList.forEach(element => {
      this.updatedQuote[element['name']] = element['value'];
    });
      this.dispatchEvent(new CustomEvent('save', {detail: this.updatedQuote }));
    }
    onAdjustClick(){
        this.isClicked = true;
    }
    @api refresh(){
      this.isClicked = false;
    }
}