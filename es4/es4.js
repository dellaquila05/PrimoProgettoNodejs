let array = [];
array[0] = 1;
array[1] = 1;
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
    });
    readline.question('Inserire la lunghezza desiderata: \n ' , n => {
      readline.close();
      fibonacci(n,array).then((data) => {
        console.log(data);
      }).catch(()=>{
        reject();
      });  
    });
const fibonacci = (n, array) => {
    return new Promise((resolve, reject) =>{
    if(n>1){
        if(array.length <= n ){
            array[array.length] = array[array.length-1] + array[array.length-2];
            setImmediate(() => {
                fibonacci(n, array)
          });
        }else{
          console.log("Quetsa è la lista di Fibonacci:");
          resolve(array);
        }
    }else{
        console.log("Input invalido la lunghezza deve essere maggiore di 1");
    }
}).then((response) => {
console.log(response);
  })
  .catch((error) => { reject(error) });;
}


