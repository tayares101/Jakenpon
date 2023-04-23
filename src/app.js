document.getElementById('handStandRock').addEventListener('click', rockHandStand);
document.getElementById('handStandPaper').addEventListener('click', paperHandStand);
document.getElementById('handStandScissors').addEventListener('click', scissorsHandStand);
document.getElementById('handStandReset').addEventListener('click', resetGame);


function fetchGameStatus() {
    if (localStorage.getItem('archNemesisStance') == 'Scissors') {
        document.getElementById('archNemesisStance').src = './assets/hand-scissors.png';
    } else if (localStorage.getItem('archNemesisStance') == 'Rock') {
        document.getElementById('archNemesisStance').src = './assets/hand-rock.png';
    } else if (localStorage.getItem('archNemesisStance') == 'Paper') {
        document.getElementById('archNemesisStance').src = './assets/hand-paper.png';
    }

    if (localStorage.getItem('mainCharacterStance') == 'Scissors') {
        document.getElementById('mainCharacterStance').src = './assets/hand-scissors.png';
    } else if (localStorage.getItem('mainCharacterStance') == 'Rock') {
        document.getElementById('mainCharacterStance').src = './assets/hand-rock.png';
    } else if (localStorage.getItem('mainCharacterStance') == 'Paper') {
        document.getElementById('mainCharacterStance').src = './assets/hand-paper.png';
    }

    if (localStorage.getItem('archNemesisScore') == null) {
        document.getElementById('anScore').innerHTML = '0';
    } else {
        document.getElementById('anScore').innerHTML = localStorage.getItem('archNemesisScore');
    }

    if (localStorage.getItem('mainCharacterScore') == null) {
        document.getElementById('mcScore').innerHTML = '0';
    } else {
        document.getElementById('mcScore').innerHTML = localStorage.getItem('mainCharacterScore');
    }
}

function resetGame() {
    localStorage.removeItem('mainCharacterStance');
    localStorage.removeItem('archNemesisStance');
    localStorage.removeItem('mainCharacterScore');
    localStorage.removeItem('archNemesisScore');

    fetchGameStatus();
}

function arcNemesisHandStand() {
    var handStand = "";
    var random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            handStand = "Rock";
            break;
        case 1:
            handStand = "Paper";
            break;
        default:
            handStand = "Scissors";
    }

    localStorage.setItem('archNemesisStance', handStand);

    return handStand;
}

function setScore(roundWinner) {
    if (roundWinner == 'MC') {
        if (localStorage.getItem('mainCharacterScore') == null) {
            localStorage.setItem('mainCharacterScore', '1');
        } else {
            var score = parseInt(localStorage.getItem('mainCharacterScore', '1'));
            score += 1;
            localStorage.setItem('mainCharacterScore', score.toString());
        }
        document.getElementById('mcScore').innerHTML = localStorage.getItem('mainCharacterScore');
    } else {
        if (localStorage.getItem('archNemesisScore') == null) {
            localStorage.setItem('archNemesisScore', '1');
        } else {
            var score = parseInt(localStorage.getItem('archNemesisScore', '1'));
            score += 1;
            localStorage.setItem('archNemesisScore', score.toString());
        }
        document.getElementById('anScore').innerHTML = localStorage.getItem('archNemesisScore');
    }

    return;
}

function rockHandStand() {
    document.getElementById('mainCharacterStance').src = './assets/hand-rock.png';
    localStorage.setItem('mainCharacterStance', 'Rock');
    var nemesisStand = arcNemesisHandStand();
    var status = '';

    if (nemesisStand == 'Rock') {
        // display Draw Somewhere
        status = 'Draw!';
        document.getElementById('archNemesisStance').src = './assets/hand-rock.png';
    } else if (nemesisStand == 'Paper') {
        // display AN wins
        setScore('AC');
        status = 'AC Wins this round!'
        document.getElementById('archNemesisStance').src = './assets/hand-paper.png';
    } else {
        // display MC wins
        setScore('MC');
        status = 'MC Wins this round!';
        document.getElementById('archNemesisStance').src = './assets/hand-scissors.png';
    }

    document.getElementById('scoreStatus').innerHTML == status;
}

function paperHandStand() {
    document.getElementById('mainCharacterStance').src = './assets/hand-paper.png';
    localStorage.setItem('mainCharacterStance', 'Paper');
    var nemesisStand = arcNemesisHandStand();
    var status = '';

    if (nemesisStand == 'Paper') {
        // display Draw Somewhere
        status = 'Draw!';
        document.getElementById('archNemesisStance').src = './assets/hand-paper.png';
    } else if (nemesisStand == 'Scissors') {
        // display AN wins
        setScore('AC');
        status = 'AC Wins this round!'
        document.getElementById('archNemesisStance').src = './assets/hand-scissors.png';
    } else {
        // display MC wins
        setScore('MC');
        status = 'MC Wins this round!';
        document.getElementById('archNemesisStance').src = './assets/hand-rock.png';
    }

    document.getElementById('scoreStatus').innerHTML == status;
}

function scissorsHandStand() {
    document.getElementById('mainCharacterStance').src = './assets/hand-scissors.png';
    localStorage.setItem('mainCharacterStance', 'Paper');
    var nemesisStand = arcNemesisHandStand();
    var status = '';

    if (nemesisStand == 'Scissors') {
        // display Draw Somewhere
        status = 'Draw!';
        document.getElementById('archNemesisStance').src = './assets/hand-scissors.png';
    } else if (nemesisStand == 'Rock') {
        // display AN wins
        setScore('AC');
        status = 'AC Wins this round!'
        document.getElementById('archNemesisStance').src = './assets/hand-rock.png';
    } else {
        // display MC wins
        setScore('MC');
        status = 'MC Wins this round!';
        document.getElementById('archNemesisStance').src = './assets/hand-paper.png';
    }

    document.getElementById('scoreStatus').innerHTML == status;
}