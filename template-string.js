const priya = 'priya tu ab tho aja';
const meye = "ei meye suno tumi ki jano";
const kobita = `kobita tumi sopno charini`;
const oldMultiline = 'tumi more jiboner vabona \n' +
'hridoyer suker dula';
const newMultiline = `tumi more jiboner vabona
hridoyer suker dula`;
// dynamic string
const friends = ['abul', 'babul', 'kabul', 'tabul']; 
const count = 5;
const old = '<h4 class="friend-name">Friend-5</h4>';
const old2 = '<h4 class="friend-name">Friend-' + count + '</h4>';
const new1 = `<h4 class="friend-name">Friend-${count}</h4>`;
const new2 = `<h4 class="friend-name">Friend-${friends.length}</h4>`;
console.log(new2);

const first = 'Proloy';
const second = 'CB';
const fullOld = first + ' ' + second;
const fullNew = `This is full name: ${first} ${second}.Has money ${friends.length*500}`;
console.log(fullNew);