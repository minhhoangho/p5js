function Triangle(x1, y1, x2, y2, x3, y3) {
    this.body = triangle(x1, y1, x2, y2, x3, y3);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
    this.centerX = (x1 + x2 + x3) /3;
    this.centerY = (y1 + y2 + y3) /3;
    
}