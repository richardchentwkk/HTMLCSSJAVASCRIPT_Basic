function Point(x, y) {
    this.x = x;
    this.y = y;
}

function Line(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
    this.slope = (this.p1.y - this.p2.y) / (this.p1.x - this.p2.x);
}