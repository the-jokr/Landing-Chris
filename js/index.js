
class Page {
    constructor(pageElement) {
        this.pageElement = pageElement;
        this.nextButton = document.querySelector('.next-page');
        this.nextButton.addEventListener('click', () => this.expandPage());
        this.topPage = document.querySelector('.top')
        this.introPage = document.querySelector('.intro')
        this.showCasePage = document.querySelector('.showcase')
        this.explainpage = document.querySelector('.explain')
        this.bottomPage = document.querySelector('.bottom')
    }

    expandPage() {

        // if (this.pageElement.classList.contains("page-open")) {
        //     this.topPage.classList.remove('page-open');
        //     this.topPage.classList.add('page-close');
        // }else if(this.pageElement.classList.contains("page-close")) {
        //     this.introPage.classList.remove('page-close');
        //     this.introPage.classList.add('page-open');
        // }else if(this.introPage.classList.contains("page-close")) {
        //     this.showCasePage.classList.remove('page-close');
        //     this.showCasePage.classList.add('page-open');
        // }


    }
}


let pages = document.querySelectorAll('.page');
pages.forEach(page => {
    return new Page(page);
});




//   class TabLink {
//     constructor(tabLink) {
//       this.tabLink = tabLink;
//       const tabNumber = tabLink.dataset.tab;
//       this.itemElement = document.querySelector(`.tabs-item[data-tab="${tabNumber}"]`);
//       this.tabItem = new TabItem(this.itemElement);
//       tabLink.addEventListener('click', () => this.select());
//     };

//     select() {
//       const links = document.querySelectorAll('.tabs-link');
//       links.forEach(links => links.classList.remove('tabs-link-selected'));
//       this.tabLink.classList.add('tabs-link-selected');
//       this.tabItem.select();
//     }

//     deselect() {
//       console.log("deselect in TabLink works")
//     }

//   }

//   class TabItem {
//     constructor(tabItem) {
//       this.tabItem = tabItem;
//     }

//     select() {
//       const items = document.querySelectorAll('.tabs-item');
//       items.forEach(items => items.classList.remove('tabs-item-selected'));
//       this.tabItem.classList.add('tabs-item-selected');
//     }

//     deselect() {
//       console.log("deselect in TabItem works")
//     }
//   }
//   links = document.querySelectorAll('.tabs-link').forEach(link => new TabLink(link));
