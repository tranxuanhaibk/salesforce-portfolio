import { LightningElement, track, wire } from 'lwc';
import fbLogo from '@salesforce/resourceUrl/facebook_logo';
import getCerrtificates from "@salesforce/apex/PortfolioController.getCerrtificates";

export default class CertificationsPage extends LightningElement {
    fbLogo = fbLogo;
    isLoaded = false;
    @track certs;

    connectedCallback() {
        this.isLoaded = false;
        this._getCerrtificates();
    }

    
    _getCerrtificates() {
        getCerrtificates()
        .then((result) => {
            if (result) {
                this.certs = result;
                this.isLoaded = true;
            }
        })
    }
}