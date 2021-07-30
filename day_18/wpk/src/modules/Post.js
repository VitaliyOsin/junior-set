export default class Post {
    constructor(title, img){
        this.title = title;
        this.date = new Date();
        this.img = img;
    }

    toString() {
        return JSON.stringify({
            title: this.title,
            date: this.date,
            img: this.img
        })
    }
}