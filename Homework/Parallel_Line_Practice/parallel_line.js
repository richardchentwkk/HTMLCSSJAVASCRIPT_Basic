function Line(x1,y1,x2,y2){
	this.x1 = x1;
	this.x2 = x2;
	this.y1 = y1;
	this.y2 = y2;
	this.slope = (x1-x2)/(y1-y2);
}