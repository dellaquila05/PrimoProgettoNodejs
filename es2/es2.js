import fetch from 'node-fetch'; 
import { createRequire } from "module";
const require = createRequire(import.meta.url);
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
const login = (username,password) => {   
    return new Promise((resolve, reject) => {
fetch("https://ws.progettimolinari.it/credential/login", {
    headers: {
      "Content-Type": "application/json",
      key: "dbe120ab-55b2-4a15-8a5b-78aa04bd6975"
    },
    method: "POST",
    body: JSON.stringify(
      {
        username: username,
        password: password
      })
  })
  .then((r) => {
    resolve(r.json())
  })
  .catch((error) => { reject(error) });
});
}
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
    });
    readline.question('Inserirsci il tuo username: \n ' , username => {
    readline.question('Inserirsci la tua password: \n' , password => {
      login(username, password);
      readline.close();
    });
    });
    