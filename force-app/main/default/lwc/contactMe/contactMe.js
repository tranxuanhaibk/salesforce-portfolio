import { LightningElement } from 'lwc';
import handleContactMe from "@salesforce/apex/PortfolioController.handleContactMe";

export default class ContactMe extends LightningElement {
    formData = {
        name: '',
        email: '',
        message: ''
    };
    showSuccess = false;

    handleInputChange(event) {
        const field = event.target.name;
        this.formData[field] = event.target.value;
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('Form submitted:', this.formData);
        handleContactMe({
            email: this.formData.email,
            message:this.formData.message,
            guestName: this.formData.name})
        .then(() => {
            this.showSuccess = true;
            this.formData = { name: '', email: '', message: '' };
            this.template.querySelectorAll('lightning-input, lightning-textarea')
                .forEach(input => input.value = '');
        });

        setTimeout(() => {
            this.showSuccess = false;
        }, 3000);
    }
}