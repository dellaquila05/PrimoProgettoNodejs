import fetch from 'node-fetch'; 
import { createRequire } from "module";
const require = createRequire(import.meta.url);
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
    });
    readline.question('Inseriri una chiave ' , key => {
    readline.question('Inseriri un valore ' , value => {
      salva(key, value);
      readline.close();
      });
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
  }).then(r => r.json())
  .then(response => {
    console.log(response);
  })
    .catch((error) => { console.log(error) });
}