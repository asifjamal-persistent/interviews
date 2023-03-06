/*
 * Provus Services Quoting
 * Copyright (c) 2023 Provus Inc. All rights reserved.
 */

import { LightningElement, api } from "lwc";

export default class EditQuotePage extends LightningElement {
  @api recordId;
  updatedQutoes;
  onSave(event){

    console.log('oonsave');
    console.log(event.target.detail);
    this.updatedQutoes = event.target.detail;
  }
}