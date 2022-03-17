const pacman = document.getElementById("pacman");
const ghost1 = { id: "ghost1", x: 1, y: 1 };
const ghost2 = { id: "ghost2", x: 1, y: 11 };
const ghost3 = { id: "ghost3", x: 13, y: 1 };
const ghost4 = { id: "ghost4", x: 13, y: 11 };

let time = 60;

let [topValue, leftValue, y, x, score, turn, o] = [120, 140, 6, 7, 0, "", 1.5];
let worldArr = [
    [
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, o, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, o, 2],
        [2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2],
        [2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2],
        [2, 2, 2, 1, 1, 1, 1, 0, 1, 1, 1, 1, 2, 2, 2],
        [2, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2],
        [2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2],
        [2, o, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, o, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    ],
    [
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, o, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, o, 2],
        [2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2],
        [2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2],
        [2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2],
        [2, o, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, o, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    ],
    [
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, o, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, o, 2],
        [2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2],
        [2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2],
        [2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2],
        [2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2],
        [2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2],
        [2, o, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, o, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    ],
    [
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2],
        [2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 2, o, 2, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2],
        [2, o, 2, 2, 1, 1, 1, 0, 1, 1, 1, 2, 2, o, 2],
        [2, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 2, o, 2, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 2],
        [2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    ],
    [
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, o, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, o, 2],
        [2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 2],
        [2, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 1, 2],
        [2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 2, 0, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 2],
        [2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
        [2, o, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, o, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    ],
];

const rand = Math.floor(Math.random() * worldArr.length);
const world = worldArr[rand];
const totalScore = getTotalScore();

function createWorld() {
    let newWorld = "";
    for (let row = 0; row < world.length; row++) {
        newWorld += "<div class='row'>";
        for (let cell = 0; cell < world[row].length; cell++) {
            if (world[row][cell] == 2) {
                newWorld += "<div class='brick'></div>";
            } else if (world[row][cell] == 1) {
                newWorld += "<div class='coin'></div>";
            } else if (world[row][cell] == 1.5) {
                newWorld += "<div class='cherry'></div>";
            } else {
                newWorld += "<div class='empty'></div>";
            }
        }
        newWorld += "</div>";
    }

    document.getElementById("world").innerHTML = newWorld;
}

function updatePacman() {
    pacman.style.left = leftValue + "px";
    pacman.style.top = topValue + "px";
    pacman.style.transform = turn;
    getCoordinates();
    checkCollision();
}

function updateGhost(g) {
    const ghost = document.getElementById(g.id);

    move = randomMovement();

    if (move == "up" && world[g.y + 1][g.x] < 2) g.y++;
    if (move == "down" && world[g.y - 1][g.x] < 2) g.y--;
    if (move == "left" && world[g.y][g.x - 2] < 2) g.x--;
    if (move == "right" && world[g.y][g.x + 1] < 2) g.x++;

    console.log(g.y, g.x);

    ghost.style.left = g.x * 20 + "px";
    ghost.style.top = g.y * 20 + "px";
    checkCollision();
}

function checkCollision() {
    checkScore();
    if (
        time < 0 ||
        (y == ghost1.y && x == ghost1.x) ||
        (y == ghost2.y && x == ghost2.x) ||
        (y == ghost3.y && x == ghost3.x) ||
        (y == ghost4.y && x == ghost4.x)
    ) {
        gameOver();
    }
}

function gameOver() {
    clearInterval(timer);
    clearInterval(ghostInterval);
    new Audio("./dead.mp3").play();
    time = 0;
    y = -10;
    x = -10;
    setTimeout(() => {
        document.getElementById("game-over").style.display = "block";
        alert(`Game Over! Your score is ${score}`);
    }, 1500);
}

function randomMovement() {
    const rand = Math.floor(Math.random() * 4);
    const movement = ["up", "down", "right", "left"];
    return movement[rand];
}

document.onkeyup = function (e) {
    //   console.log(e);
    if (e.key == "ArrowLeft" || e.key == "a") {
        // LEFT
        if (world[y][x - 1] < 2) {
            turn = "rotate(180deg)";
            leftValue = leftValue - 20;
            x--;
        } else return;
    } else if (e.key == "ArrowRight" || e.key == "d") {
        // RIGHT
        if (world[y][x + 1] < 2) {
            turn = "rotate(0deg)";
            leftValue = leftValue + 20;
            x++;
        } else return;
    } else if (e.key == "ArrowDown" || e.key == "s") {
        // DOWN
        if (world[y + 1][x] < 2) {
            turn = "rotate(90deg)";
            topValue = topValue + 20;
            y++;
        } else return;
    } else if (e.key == "ArrowUp" || e.key == "w") {
        // UP
        if (world[y - 1][x] < 2) {
            turn = "rotate(270deg)";
            topValue = topValue - 20;
            y--;
        } else return;
    } else return;
    updatePacman();
};

function getCoordinates() {
    const divClass = document.querySelectorAll(".row");
    const obj = divClass[y].children[x].attributes.class.value;

    if (obj == "coin") {
        score++;
    } else if (obj == "cherry") {
        score += 20;
    }

    document.querySelector("h3").innerText = `Score: ${score}`;
    console.log(`coordinates: [${y}, ${x}] ; object: ${obj} ; score: ${score}`);
    world[y][x] = 0;
    divClass[y].children[x].attributes.class.value = "empty";
}

function getTotalScore() {
    let total = 0;
    for (let i = 1; i < world.length - 1; i++) {
        for (let j = 1; j < world[i].length - 1; j++) {
            if (world[i][j] == 1) {
                total++;
            } else if (world[i][j] > 1 && world[i][j] < 2) {
                total += 20;
            }
        }
    }
    return total;
}

const timer = setInterval(() => {
    time--;
    document.querySelector("h5").innerText = `Time remaining: ${time}s`;
}, 1000);

const ghostInterval = setInterval(() => {
    updateGhost(ghost1);
    updateGhost(ghost2);
    updateGhost(ghost3);
    updateGhost(ghost4);
}, 750);

createWorld();

function checkScore() {
    if (score == totalScore) {
        alert(`You Won! Your score is ${score + time}`);
        location.reload();
    }
}
