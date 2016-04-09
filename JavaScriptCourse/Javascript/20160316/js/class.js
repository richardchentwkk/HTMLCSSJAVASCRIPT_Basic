var player = new Object();
/*建立物件成員*/
player.name = "Bill";
player.hp = 100;
/*建立物件方法*/
player.fight = function() {
    this.hp = this.hp - 2; // HP -2
};
player.report = function() {
    alert(this.name + ":" + this.hp); //Report
};

player.fight();
player.report();
