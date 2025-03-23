import { LightningElement, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import myAvatar from '@salesforce/resourceUrl/myAvatar';

export default class HomeSection extends NavigationMixin(LightningElement) {
    my_Avatar = myAvatar;
    @track skills = [
        { name: 'Salesforce Development', progress: 90, progressStyle: 'width: 90%' },
        { name: 'HTML & CSS', progress: 85, progressStyle: 'width: 85%' },
        { name: 'Apex', progress: 80, progressStyle: 'width: 80%' },
        { name: 'Lightning Web Components', progress: 88, progressStyle: 'width: 88%' },
        { name: 'Aura Components', progress: 75, progressStyle: 'width: 75%' }
    ];

    @track testimonials = [
        {
            id: 1,
            text: 'Tran Xuan Hai is an exceptional developer with a deep understanding of Salesforce. His work is always top-notch!',
            author: 'John Doe',
            role: 'Project Manager at TechCorp'
        },
        {
            id: 2,
            text: 'Working with Hai was a pleasure. His expertise in LWC and CSS made our project stand out.',
            author: 'Jane Smith',
            role: 'Lead Developer at Digital Solutions'
        }
    ];

    navigateToContact() {
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                page: 'Contact_Me__c'
            }
        });
    }

    navigateToWorkHistory() {
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'work_history__c'
            },
        });
    }

    navigateToCertifications() {
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                apiName: 'Certifications__c',
            }
        });
    }

    navigateToProjects() {
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                apiName: 'SitePageB',
            }
        });
    }
}