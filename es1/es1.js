//let fetch = require('node-fetch'); //require è uguale a import 
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
    });
    readline.question('Inseriri una chiave ' , key => {
    console.log(`Hey there ${key}!`);
    readline.close();

    });
    readline.question('Inseriri un valore ' , value => {
        console.log(`Hey there ${value}!`);
        readline.close();
        });

const salva = (key,value) => {
    fetch("https://ws.progettimolinari.it/cache/set", {
    headers: {
      "Content-Type": "application/json",
      key: "dbe120ab-55b2-4a15-8a5b-78aa04bd6975"
    },
    method: "POST",
    body: JSON.stringify(
      {
        key: key,
        value: value
      })
  }).then((r) => {
      resolve(r.json())
    })
    .catch((error) => { reject(error) });
}