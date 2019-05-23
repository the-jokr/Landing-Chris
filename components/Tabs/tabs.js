
class Tabs {

    constructor(tab) {
        this.tab = tab;
        console.log(this.tab);
    };

}

class TabLink {
    constructor(tabLink) {
        this.tabLink = tabLink;
        const tabNumber = tabLink.dataset.tab;
        this.itemElement = document.querySelector(`.tabs-item[data-tab="${tabNumber}"]`);
        this.tabItem = new TabItem(this.itemElement);
        tabLink.addEventListener('click', () => this.select());
    };

    select() {
        const links = document.querySelectorAll('.tabs-link');
        links.forEach(links => links.classList.remove('tabs-link-selected'));
        this.tabLink.classList.add('tabs-link-selected');
        this.tabItem.select();
    }

}

class TabItem {
    constructor(tabItem) {
        this.tabItem = tabItem;
    }

    select() {
        const items = document.querySelectorAll('.tabs-item');
        items.forEach(items => items.classList.remove('tabs-item-selected'));
        this.tabItem.classList.add('tabs-item-selected');
    }

}


const tabs = new Tabs();

links = document.querySelectorAll('.tabs-link').forEach(link => new TabLink(link));
