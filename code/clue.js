// STEP 1

// SUSPECTS:

// *** 1. Mr Green
const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur",
};
// *** 2. Professor Plum
const profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "He is widely seen as the intellectual",
  age: 36,
  image: "assets/plum.png",
  occupation: "Professor",
};
// *** 3. Miss Scarlet
const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "red",
  description: "Young, cunning, and highly attractive",
  age: 25,
  image: "assets/scarlet.png",
  occupation: "Actress",
};
// *** 4. Mrs Peacock
const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "Maintains her dignity in almost all cases",
  age: 32,
  image: "assets/peacock.png",
  occupation: "Socialite",
};
// *** 5. Colonel Mustard
const colMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "Both dignified and dangerous",
  age: 55,
  image: "assets/mustard.png",
  occupation: "Colonel",
};
// *** 6. Mrs White
const mrsWhite = {
  firstName: "Mrs",
  lastName: "White",
  color: "white",
  description: "A frazzled servant",
  age: 67,
  image: "assets/white.png",
  occupation: "Housekeeper",
};

// WEAPONS:

// *** 1. rope
const rope = {
  name: "rope",
  weight: 10,
};
// *** 2. knife
const knife = {
  name: "knife",
  weight: 2,
};
// *** 3. candlestick
const candlestick = {
  name: "candlestick",
  weight: 4,
};
// *** 4. dumbbel
const dumbbel = {
  name: "dumbbel",
  weight: 7,
};
// *** 5. poison
const poison = {
  name: "paison",
  weight: 1,
};
// *** 6. axe
const axe = {
  name: "axe",
  weight: 5,
};
// *** 7. bat
const bat = {
  name: "bat",
  weight: 6,
};
// *** 8. trophy
const trophy = {
  name: "trophy",
  weight: 8,
};
// *** 9. pistol
const pistol = {
  name: "pistol",
  weight: 3,
};

console.log(profPlum.occupation);
console.log(axe.weight);

// STEP 2

// suspects array
const suspects = [
  mrGreen,
  profPlum,
  missScarlet,
  mrsPeacock,
  colMustard,
  mrsWhite,
];

// weapons array
const weapons = [
  rope,
  knife,
  candlestick,
  dumbbel,
  poison,
  axe,
  bat,
  trophy,
  pistol,
];

// rooms array
const rooms = [
  "Dining Room",
  "Conservatory",
  "Kitchen",
  "Study",
  "Library",
  "Billiard Room",
  "Lounge",
  "Ballroom",
  "Hall",
  "Spa",
  "Living Room",
  "Observatory",
  "Theater",
  "Guest House",
  "Patio",
];

console.log(suspects);
console.log(weapons);
console.log(rooms);

console.log(suspects[3]);
console.log(weapons[0]);
console.log(rooms[rooms.length - 1]);

// STEP 3

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
const mystery = {
  killer: {},
  weapon: {},
  room: "",
};

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects);

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById("killerCard").style.background = mystery.killer.color;
  document.getElementById(
    "killerName"
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
  document.getElementById("killerAge").innerHTML = `${mystery.killer.age}`;
  document.getElementById(
    "killerOccupation"
  ).innerHTML = `${mystery.killer.occupation}`;
  document.getElementById("killerImage").src = `${mystery.killer.image}`;
  document.getElementById(
    "killerDescription"
  ).innerHTML = `${mystery.killer.description}`;
};

console.log(pickKiller());
document.getElementById("killerCard").addEventListener("click", pickKiller);

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons);
  document.getElementById("weaponCard");
  document.getElementById("weaponName").innerHTML = `${mystery.weapon.name}`;
  document.getElementById(
    "weaponWeight"
  ).innerHTML = `${mystery.weapon.weight}`;
};

console.log(pickWeapon());
document.getElementById("weaponCard").addEventListener("click", pickWeapon);

const pickRoom = () => {
  mystery.room = randomSelector(rooms);
  document.getElementById("roomCard");
  document.getElementById("roomName").innerHTML = `${mystery.room}`;
};

console.log(pickRoom());
document.getElementById("roomCard").addEventListener("click", pickRoom);

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:

const revealMystery = () => {};

// 'The murder was committed by Jacob Green, in the living room with a rope.'