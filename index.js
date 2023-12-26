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

let combos = [];
let start = 1, end = 10;
while (end < 101) {
    let combo = [];
    for (let index = start; index <= end; index++) {
        combo.push(index);
    }
    combos.push(combo);
    start = start + 10;
    end += 10;

}

start = 1, end = 91;
while (end < 101) {
    let combo = [];
    for (let index = start; index <= end; index+=10) {
        combo.push(index);
    }
    combos.push(combo);
    start++;
    end++;

}
console.log(combos);


let humanGameBoards = [];
for(let i = 1 ; i <= 100 ; i++){
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

    Array.from(childrens).forEach(c => {
        c.addEventListener('click', attackOnOpposition )
    })

}

function attackOnOpposition(e) {
    if(!e.target.className.includes('hit')){
        let num = e.target.className.substring(1);
        e.target.classList.add('hit');
        receiveAttack(num);
    }
   
}


