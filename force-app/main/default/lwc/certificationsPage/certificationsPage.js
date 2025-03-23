import { LightningElement, track, wire } from 'lwc';
import fbLogo from '@salesforce/resourceUrl/facebook_logo';
import getCerrtificates from "@salesforce/apex/CertificationController.getCerrtificates";

export default class CertificationsPage extends LightningElement {
    fbLogo = fbLogo;
    @track certs;

    connectedCallback() {
        this._getCerrtificates();
    }

    
    _getCerrtificates() {
        getCerrtificates()
        .then((result) => {
            if (result) {
                this.certs = result;
            }
        })
    }
}