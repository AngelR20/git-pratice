//wellness project 
let userName = 'Angel'//your name goes here
userName? console.log (`Hello, ${userName}`) : console.log('Hello!');
let randomNumber = Math.floor(Math.random() * 3);
let Motivation = ''
switch (randomNumber){
  case 0:
  Motivation = 'It is certain for you to win today';
  break;
  case 1:
  Motivation = 'Cannot predict now how tomorrow will be so why worry';
  break;
  case 2:
  Motivation = 'Outlook for today is so good';
  break;
}
console.log(`The future says ${Motivation}`)