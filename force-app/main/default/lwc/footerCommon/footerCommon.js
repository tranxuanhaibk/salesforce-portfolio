import { LightningElement } from 'lwc';
import fbLogo from '@salesforce/resourceUrl/facebook_logo';
import linkedinLogo from '@salesforce/resourceUrl/linkedin_logo';
import trailheadLogo from '@salesforce/resourceUrl/trailhead_logo';
import xLogo from '@salesforce/resourceUrl/x_logo';

export default class FooterCommon extends LightningElement {
    fb_img = fbLogo;
    linkedin_img = linkedinLogo;
    trailhead_img = trailheadLogo;
    x_img = xLogo;

    handleRedirectSocial(event) {
        const nameValue = event.currentTarget.dataset.name;
        let url = '';
        switch (nameValue) {
            case 'facebook':
                url = 'https://www.facebook.com/hai151199/'
                break;
            case 'linkedin':
                url = 'https://www.linkedin.com/in/tranxuanhai/'
                break;
            case 'trailhead':
                url = 'https://www.salesforce.com/trailblazer/profile'
                break;
            case 'x':
                url = 'https://x.com/TranHaiii9'
                break;
            default:
                break;
        }

        if (url) {
            window.open(url, '_blank');
        }
    }
}