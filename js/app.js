// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    this.x = 0;
    this.y = 65 + 83 * (Math.floor(Math.random()* 3));
    this.speed = Math.random() * 101 + 101 ;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;

    // make enemies loop to left side of canvas after reaching canvas.width
    if (this.x >= 505) {
        this.x = 0;
        this.y = 65 + 83 * (Math.floor(Math.random()* 3));
        this.speed = Math.random() * 101 + 101;
    }
    console.log("enemy.x: "+ Math.floor(this.x) + " enemy.y: "+  this.y); 

    // Check for collision with enemies or barrier-walls
    checkCollision(this);
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.x = 202;
    this.y = 397;
    this.sprite = 'images/char-princess-girl.png';
};

Player.prototype.update = function() {
    if (this.x <= 0) {
        this.x = 0;
    }
    if (this.x >= 404) {
        this.x = 404;
    }
    if (this.y >= 397) {
        this.y = 397;
    };

    if (this.y <= 0) {
        this.y = 397;
        this.x = 202; 
    }
}

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};


//enemy.y = 65, 148, 231
//player.y = 397, 314, 231, 148, 65
Player.prototype.handleInput = function(keyPress) {
    if (keyPress == 'left') {
        this.x -= 101;
    }
    if (keyPress == 'up') {
        this.y -= 83;
    }
    if (keyPress == 'right') {
        this.x += 101;
    }
    if (keyPress == 'down') {
        this.y += 83;
    }
    console.log('keyPress is: ' + keyPress);
    console.log("player.x: "+ this.x + " player.y: " + this.y); 
};

var checkCollision = function(anEnemy) {
    if (player.y == anEnemy.y && player.x == Math.floor(anEnemy.x) + 3){
        player.x = 202;
        player.y = 397; 
    }
    
    if (player.y == anEnemy.y && player.x == Math.floor(anEnemy.x) + 2){
        player.x = 202;
        player.y = 397; 
    }
    
     if (player.y == anEnemy.y && player.x == Math.floor(anEnemy.x) + 1){
        player.x = 202;
        player.y = 397; 
    }
}

    // Now instantiate your objects.
    // Place all enemy objects in an array called allEnemies
    // Place the player object in a variable called player
    // Enemy randomly placed vertically within section of canvas
    // Declare new score and gameLevel variables to store score and level
    var allEnemies = [];
    var enemy = new Enemy();
    var enemy1 = new Enemy(); 
    allEnemies.push(enemy);
    allEnemies.push(enemy1);
    

    var player = new Player();

    // This listens for key presses and sends the keys to your
    // Player.handleInput() method. You don't need to modify this.
    document.addEventListener('keydown', function(e) {
        var allowedKeys = {
            37: 'left',
            38: 'up',
            39: 'right',
            40: 'down'
        };

        player.handleInput(allowedKeys[e.keyCode]);
        console.log(allowedKeys[e.keyCode]);
    });