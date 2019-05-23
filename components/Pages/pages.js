
class Page {
    constructor(pageElement) {
        this.pageElement = pageElement;
        this.itemElement = document.querySelector(`.intro`);
        // this.itemElement.addEventListener('load', () => this.animate());
    }

    animate(){

    }

}

console.log(window.pageYOffset);

let pages = document.querySelectorAll('.page');
pages.forEach(page => {
    return new Page(page);
});



