class Ship {
    constructor(length, hit, sunk) {
        this.length = length;
        this.hit = hit;
        this.sunk = sunk;
    }
}

class GameBoard {
    constructor(ship, coordinates) {
        this.ship = ship;
        this.coordinates = coordinates;
    }

    placeShip() {
        console.log("Ship is moved to " + this.coordinates);
    }
}

class Coordinates {
    constructor(row, column, used = false) {
        this.row = row;
        this.column = column;
        this.used = used;

    }

    changeCoordinateStatus(coordinates, used = true) {
        coordinates.used = used;
    }
}
let ship1 = new Ship(3, 0, false);
let gameBoard1 = new GameBoard(ship1, new Coordinates(0, 0));

let ship2 = new Ship(3, 0, false);
let gameBoard2 = new GameBoard(ship1, new Coordinates(5, 0));

let gameBoards = [gameBoard1, gameBoard2];



function hit(ship) {
    if (ship.hit != ship.length) {
        ship.hit++;
    }
}

function isSunk(ship) {
    return ship.hit === ship.length;
}

function receiveAttack(coordinates) {
        let gameboard = gameBoards.filter(o => o.coordinates = coordinates && !o.coordinates.isused)
        if (gameboard) {
            hit(gameBoard.ship);

            let gameover = gameBoards.every(o => isSunk(o.ship));
            alert('gameover');
        }


    

}