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
    constructor(num, used = false) {
        this.num = num;
        this.used = used;

    }

    changeCoordinateStatus(used = true) {
        this.used = used;
    }
}

class Player {
    constructor(name) {
        this.name = name;
    }
}


let humanGameBoards = [];
for(let i = 0 ; i < 100 ; i++){
    let coordinate = new Coordinates(i, false);
    humanGameBoards.push(new GameBoard(null,coordinate));
    
}
createHumanBoard(humanGameBoards);



function hit(ship) {
    if (ship.hit != ship.length) {
        ship.hit++;
    }
}

function isSunk(ship) {
    return ship.hit === ship.length;
}

function receiveAttack(num) {
    let gameboard = humanGameBoards.find(o => o.coordinates.num == num && !o.coordinates.isused)
    if (gameboard) {
        if (gameboard.ship) {
            hit(gameBoard.ship);
            let gameover = gameBoards.every(o => isSunk(o.ship));
            alert('gameover');
            // alert(`won by ${attacker.name}`);
        }
        gameboard.coordinates.changeCoordinateStatus(true);

    }




}

function ComputerMove(gameBoard) {
    let com = new Player("Computer");
    receiveAttack(gameBoard.coordinates, com)
    
}

//Dom
function createHumanBoard(humanGameBoards) {
    let humanBoard = document.querySelector('#humanBoard');
    humanGameBoards.forEach(element => {
        let div = document.createElement('div');
        div.className = `h${element.coordinates.num}`;
        div.textContent = element.coordinates.num;

        humanBoard.append(div);
    });

    let childrens = humanBoard.querySelectorAll('div');
    console.log(childrens)

    Array.from(childrens).forEach(c => {
        console.log(c);
        c.addEventListener('click', attackOnOpposition )
    })

}

function attackOnOpposition(e) {
    let num = e.target.className.substring(1);
    receiveAttack(num);
}


