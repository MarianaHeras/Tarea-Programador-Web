function distancia(a){
    
    if (a >0 && a <=1000){
        return "pie";
    }else if (a>1000 && a<=10000){
        return "bicicleta";
    }else if (a>10000 && a<=30000){
        return "colectivo";
    }else if (a > 30000 && a <=100000){
        return "auto"
    }else if (a > 100000){
        return "avion";
    }
}
let transporte = distancia (150000);
console.log(transporte);