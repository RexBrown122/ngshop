export class Dog {
    private id: string;
    private name: string;
    private thumbnail: string;

    get dogID() {
        return this.id;
    }

    get dogName() {
        return this.name;
    }

    get dogThumbnail() {
        return this.thumbnail;
    }
}
