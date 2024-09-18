let edades =['45','33','56','18','23'];
let mayor = edades[0]

for(let numero of edades){
    if (numero > mayor){
        mayor= numero;
    }
}
console.log(mayor);