//Shape Class
class Shape {
    constructor(color = 'black') {
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }

    render() {

    }
}
//Triangle class
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}
//Circle class
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}
//Square class
class Square extends Shape {
    render() {
        return `<rect width="200" height="200" fill="${this.color}" />`;
    }
}
//Exporting classes
module.exports = {
    Triangle,
    Circle,
    Square,
};