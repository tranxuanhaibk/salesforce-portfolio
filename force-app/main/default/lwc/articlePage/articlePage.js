import { LightningElement } from 'lwc';
import getArticleList from "@salesforce/apex/PortfolioController.getArticleList";
import { NavigationMixin } from 'lightning/navigation';
import myAvatar from '@salesforce/resourceUrl/myAvatar';

export default class ArticlePage extends NavigationMixin(LightningElement) {
    isLoaded = false;
    articleList=[];

    get post1Background() {
        return `background-image: url('${myAvatar}');`;
    }


    connectedCallback() {
        this.isLoaded = false;
        this._getArticleList();
    }

    _getArticleList() {
        getArticleList()
            .then(result => {
                this.articleList = JSON.parse(JSON.stringify(result));
                this.articleList = this.articleList.map(article => {
                    return {
                        ...article,
                        imageUrl: `background-image: url('${article.Article_Image__c}');`
                    }
                });
                console.log('result', result);
                this.isLoaded = true;
            })
            .catch(error => {
                console.log('_getArticleList', error);
            })
    }

    handlePostClick(event) {
        const articleId = event.target.dataset.id;
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'Article_Detail__c'
            },
            state: {
                c__articleId: articleId
            }
        });
    }
}