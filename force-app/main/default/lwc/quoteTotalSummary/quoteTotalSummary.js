/*
 * Provus Services Quoting
 * Copyright (c) 2023 Provus Inc. All rights reserved.
 */

import { LightningElement } from "lwc";

export default class QuoteTotalSummary extends LightningElement {

    isClicked = false;
    updatedQuote;
    handleSave(){
  
        console.log('save');
      this.getDataFromCLient();
    }
  
    getDataFromCLient(){
        console.log('get data');
      var inp=this.template.querySelectorAll("ightning-input");
    //   inp.forEach(function(element){
    //       if(element.name=="startDate")
    //           console.log(element.value);
    //       else if(element.name=="endDate")
    //       console.log(element.value);
    //     },this);

        inp.forEach(element => {
            console.log(element.value);
        });
  
      console.log('child save');
      console.log('child save', this.updatedQuote);
      const event = new CustomEvent('save', {detail: this.updatedQuote });
             this.dispatchEvent(event);
      
    }
    onAdjustClick(){
        this.isClicked = true;
    }
}