function Game() {

    var that = this;
    var defaultNum = 1;

    this.ele = document.createElement("button");

    this.ele.innerText = defaultNum;

    this.ele.addEventListener("click",function(){
        defaultNum = that.ele.innerHTML = defaultNum + 1;
    });

    document.body.appendChild(this.ele);
}

Game.prototype.player = function(){

};

Game.prototype.check = function () {
    if (defaultNum === 10) {
        document.write("Game over!");
    }
};

//var test = new number();

//var test2 = new number();

document.write("Player 1:");
var test = new Game();
document.write("<br>");
document.write("Player 2:");
var test2 = new Game();