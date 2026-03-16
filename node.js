const num1 = Number(process.argv[2]);
const operation = process.argv[3];
const num2 = Number(process.argv[4]);

let result;

if(operation === "add"){
    result = num1 + num2;
}
else if(operation === "sub"){
    result = num1 - num2;
}
else if(operation === "mul"){
    result = num1 * num2;
}
else if(operation === "div"){
    result = num1 / num2;
}
else{
    console.log("Operazione non valida");
    process.exit();
}

console.log("Risultato:", result);
