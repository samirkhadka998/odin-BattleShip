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
    for (let index = start; index <= end; index += 10) {
        combo.push(index);
    }
    combos.push(combo);
    start++;
    end++;

}
console.log(combos);


let humanGameBoards = [];
for (let i = 1; i <= 100; i++) {
    let coordinate = new Coordinates(i, false);
    humanGameBoards.push(new GameBoard(null, coordinate));

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
let rangeBtn = document.querySelector('#rangeBtn');
rangeBtn.addEventListener('click', checkValidInput);
let boardClick = false;

dummyInsert();

function dummyInsert(){
    for(let i = 1 ; i < 16; i++){
        if(i == 10) continue;
        let div = document.querySelector(`.h${i}`)
        div.classList.add('blue');
    }

    let rangeDiv = document.querySelector('#range');
                rangeDiv.hidden = true;
                boardClick = true;
}

let range = [0, 1, 2, 3, 4]

function checkValidInput() {
    let inputStart = document.querySelector('.start');
    let inputEnd = document.querySelector('.end');

    if (!inputStart.value || !inputEnd.value) {
        alert('Invalid Input');
        return;
    }
    let start = inputStart.value * 1;
    let end = inputEnd.value * 1;
    for (const combo of combos) {
        if (combo.includes(start) && combo.includes(end)) {
            let indexStart = combo.indexOf(start);
            let indexEnd = combo.indexOf(end);
            if (indexEnd - indexStart !== range[range.length - 1]) {
                alert('Invalid Input');
                return;
            }
            let gameBoards = [];
            for (let index = indexStart; index <= indexEnd; index++) {
                let num = combo[index];
                let gameBoard = humanGameBoards.find(o => o.ship == null && o.coordinates.num == num);
                if (!gameBoard) {
                    alert('Invalid Input');
                    return;

                }
                gameBoards.push(gameBoard);

            }

            Array.from(gameBoards).forEach(g => {
                let div = document.querySelector(`.h${g.coordinates.num}`)
                div.classList.add('blue');
                let length = range[range.length - 1] + 1;
                let ship = new Ship(length, 0, 0);
                g.ship = ship;
                g.coordinates.isused = true;
            })

            range.pop();

            if (range.length == 1) {
                let rangeDiv = document.querySelector('#range');
                rangeDiv.hidden = true;
                boardClick = true;

            }
            else {
                let rangePara = document.querySelector('.rangePara');
                rangePara.textContent = `Enter ${range.length} range`

            }

            return;


        }
    }
    alert('Invalid Input');
    return;

}

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
        c.addEventListener('click', attackOnOpposition)
    })

}

function attackOnOpposition(e) {
    if (!e.target.className.includes('hit') && boardClick) {
        let num = e.target.className.substring(1);
        e.target.classList.add('hit');
        receiveAttack(num);
    }

}




