
class Page {
    constructor(pageElement) {
        this.pageElement = pageElement;
       
    }

}




let pages = document.querySelectorAll('.page');
pages.forEach(page => {
    return new Page(page);
});



