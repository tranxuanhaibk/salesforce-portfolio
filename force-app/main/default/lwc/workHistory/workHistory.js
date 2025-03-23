import { LightningElement } from 'lwc';
import getWorkHistories from "@salesforce/apex/PortfolioController.getWorkHistories";
import bkdn from '@salesforce/resourceUrl/bkdn';

export default class WorkHistory extends LightningElement {
    isLoaded = false;
    data;

    get backgroundStyle() {
        return `background-image:url(${bkdn})`;
    }

    connectedCallback() {
        this.isLoaded = false;
        this._getWorkHistories();
    }

    _getWorkHistories() {
        getWorkHistories()
        .then((result) => {
            this.data = JSON.parse(JSON.stringify(result));
            this.data = this.data.map((item) => {
                return {
                    ...item,
                    skills: item.Skills__c.split(';'),
                    imgStyle: `background-image:url(${item.Company_Image_URL__c})`
                }
            })
            console.log('this.data ', this.data);
            this.isLoaded = true;
        })
    }
}