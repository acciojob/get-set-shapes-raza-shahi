//complete this code
class Rectangle {
	constructor(width,height){
		this.width = width;
		this.height = height;
	}
	get width(){
		return width;
	}
	get height(){
		return height;
	}
	getArea(){
		return width*height;
	}
}

class Square extends Animal {
	constructor(width,height,side){
		super(this,width,height);
		this.side = side;
	}
	getPerimeter(){
		return 4*this.side;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
