let fetch = require('node-fetch'); //require è uguale a import 
let key = document.getElementById('key');
let value = document.getElementById('value');
let button = document.getElementById('salva');
button.onclick = () => {
if(key != " " && value != " "){
    salva(key,value);
    alert("Great jobe");
}else{
    alert("You must fill in all the fields first");
}
}
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