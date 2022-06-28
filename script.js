const firstName = "Meagan";
const age = "33";
const birthday = "March 1st";
const pineapplePizza = "true";
const lifeEvents = [
  "I went to Northern Michigan University.",
  "I have a BFA in Graphic Design.",
  "I have 2 boys.",
  "I moved to Detroit in 2016.",
];

if (true) {
  console.log(
    `My name is ${firstName} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${firstName} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;
while (true) {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  if (randomNumber !== 5) {
    console.log(`${randomNumber} !== 5`);
    counter++;
  } else {
    console.log(
      `5 === 5. It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}
