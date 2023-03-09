const Pets = {
    Hipodoge: 'Hipodoge',
    Capipepo: 'Capipepo',
    Ratigueya: 'Ratigueya',
    Langostelvis: 'Langostelvis',
    Tucapalma: 'Tucapalma',
    Pydos: 'Pydos',
};

const Powers = {
    Pyro: 'Pyro',
    Hydro: 'Hydro',
    Geo: 'Geo',
    Cryo: 'Cryo',
    Electro: 'Electro',
};

let currentPetPlayer;
let currentPetEnemy;

let attackPlayer;
let attackEnemy;

function startGame() {
    let buttonPetPlayer = document.getElementById('button-pet');
    buttonPetPlayer.addEventListener('click', selectPetPlayer);
}

function selectPetPlayer() {
    let hipodoge = document.getElementById('hipodoge');
    let capipepo = document.getElementById('capipepo');
    let ratigueya = document.getElementById('ratigueya');
    let langostelvis = document.getElementById('langostelvis');
    let tucapalma = document.getElementById('tucapalma');
    let pydos = document.getElementById('pydos');

    let spanPetPlayer = document.getElementById('pet-player');

    if (hipodoge.checked) currentPetPlayer = Pets.Hipodoge;
    else if (capipepo.checked) currentPetPlayer = Pets.Capipepo;
    else if (ratigueya.checked) currentPetPlayer = Pets.Ratigueya;
    else if (langostelvis.checked) currentPetPlayer = Pets.Langostelvis;
    else if (tucapalma.checked) currentPetPlayer = Pets.Tucapalma;
    else if (pydos.checked) currentPetPlayer = Pets.Pydos;
    else alert('You must select a pet ');

    spanPetPlayer.innerHTML = currentPetPlayer;

    selectPetEnemy();

    SelectPower();
}

function selectPetEnemy() {
    let petRandom = random(1, 6);
    let spanPetEnemy = document.getElementById('pet-enemy');

    if (petRandom == 1) currentPetEnemy = Pets.Hipodoge;
    else if (petRandom == 2) currentPetEnemy = Pets.Capipepo;
    else if (petRandom == 3) currentPetEnemy = Pets.Ratigueya;
    else if (petRandom == 4) currentPetEnemy = Pets.Langostelvis;
    else if (petRandom == 5) currentPetEnemy = Pets.Tucapalma;
    else if (petRandom == 6) currentPetEnemy = Pets.Pydos;

    spanPetEnemy.innerHTML = currentPetEnemy;
}

function SelectPower() {
    let buttonPyro = document.getElementById('button-pyro');
    buttonPyro.addEventListener('click', powerPyro);
    let buttonHydro = document.getElementById('button-hydro');
    buttonHydro.addEventListener('click', powerHydro);
    let buttonGeo = document.getElementById('button-geo');
    buttonGeo.addEventListener('click', powerGeo);
    let buttonCryo = document.getElementById('button-cryo');
    buttonCryo.addEventListener('click', powerCryo);
    let buttonElectro = document.getElementById('button-electro');
    buttonElectro.addEventListener('click', powerElectro);

    SetPowerEnemy();
}

function powerPyro() {
    attackPlayer = Powers.Pyro;
}

function powerHydro() {
    attackPlayer = Powers.Hydro;
}

function powerGeo() {
    attackPlayer = Powers.Geo;
}

function powerCryo() {
    attackPlayer = Powers.Cryo;
}

function powerElectro() {
    attackPlayer = Powers.Electro;
}

function SetPowerEnemy() {
    let powerRandom = random(0, 5);

    if (powerRandom == 1) attackEnemy = Powers.Pyro;
    else if (powerRandom == 2) attackEnemy = Powers.Hydro;
    else if (powerRandom == 3) attackEnemy = Powers.Geo;
    else if (powerRandom == 4) attackEnemy = Powers.Cryo;
    else if (powerRandom == 5) attackEnemy = Powers.Electro;
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener('load', startGame);
