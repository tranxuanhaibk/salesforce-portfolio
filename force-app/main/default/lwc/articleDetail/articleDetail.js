import { LightningElement, api, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { CurrentPageReference } from 'lightning/navigation';
import getArticleById from '@salesforce/apex/PortfolioController.getArticleByUniqueId';

export default class ArticleDetail extends NavigationMixin(LightningElement) {
    @api articleId;
    article;

    connectedCallback() {
        if (this.articleId) {
            this.fetchPostDetail();
        }
    }

    @wire(CurrentPageReference)
    pageRef;

    connectedCallback() {
        let currentArticleId = this.articleId || (this.pageRef && this.pageRef.state?.c__articleId);
        if (currentArticleId) {
            this.fetchArticleDetail(currentArticleId);
        } else {
            console.error('Not found articleId in URL');
        }
    }

    fetchArticleDetail(articleId) {
        getArticleById({ uniqueId: articleId })
        .then(result => {
            if (result) {
                this.article = result;
            } else {
                this.article = null;
            }
        })
        .catch(error => {
            console.error('Error fetchArticleDetail: ', error);
            this.article = null;
        });
    }

    handleBack() {
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'Articles__c'
            }
        });
    }
}