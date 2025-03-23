import { LightningElement } from 'lwc';
import getWorkHistories from "@salesforce/apex/PortfolioController.getWorkHistories";

export default class WorkHistory extends LightningElement {
    isLoaded = false;
    data;

    connectedCallback() {
        this._getWorkHistories();
    }

    _getWorkHistories() {
        getWorkHistories()
        .then((result) => {
            this.data = JSON.parse(JSON.stringify(result));
            this.data = this.data.map((item) => {
                return {
                    ...item,
                    skills: item.Skills__c.split(';')
                }
            })
            console.log('this.data ', this.data);
            this.isLoaded = true;
        })
    }
}