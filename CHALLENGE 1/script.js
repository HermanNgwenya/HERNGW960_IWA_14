/*const firstName = 'John';
const age = 35;
const  johnHobby = 'Coding';


const logTwice = () => {
  console.log(function (logTwice));
}

function hobby() {
  logTwice(`Hello, (${firstName}).(${age}). I love (${johnHobby})!`);
}

hobby();
logTwice()
*/


const firstName = 'John';
const age = 35;
const hobby = 'Coding';

const logTwice = () => {
   console.log(`Hello, ${firstName} (${age}). I love ${hobby}!`);
   console.log(`Hello, ${firstName} (${age}). I love ${hobby}!`);
}

logTwice();