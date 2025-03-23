import { LightningElement } from 'lwc';

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
        // Ở đây bạn có thể thêm logic để gửi form data
        // Ví dụ: gọi Apex method để gửi email
        console.log('Form submitted:', this.formData);
        
        // Hiển thị message thành công
        this.showSuccess = true;
        
        // Reset form
        this.formData = { name: '', email: '', message: '' };
        this.template.querySelectorAll('lightning-input, lightning-textarea')
            .forEach(input => input.value = '');

        // Ẩn message sau 3 giây
        setTimeout(() => {
            this.showSuccess = false;
        }, 3000);
    }
}