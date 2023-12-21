class Ship{
    constructor(length, hit, sunk){
        this.length = length;
        this.hit = hit;
        this.sunk = sunk;
    }
}

function hit(ship){
    ship.hit++;
}

function isSunk(ship){
    return ship.hit === ship.length;
}