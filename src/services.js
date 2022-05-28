
export function semaforo ( cor){
    let msn = '';

    if(cor == 'verde' ){
        msn = 'pode passar' 

    }

    else if (cor == 'vermelho'){
        msn = 'aguarde'
    }

    else{
        msn = 'cor inválida'
    }
    return msn;
}

export function diaSemana (dia) {
    let msn = '';
    dia = Number(dia);
    
    if(dia == 0)
    {
        msn = 'domingo'
    }
    else if (dia == 1)
    {
        msn = 'segunda'
    }

    else if (dia == 2)
    {
        msn = 'terça'
    }

    else if (dia == 3)
    {
        msn = 'quarta'
    } else if (dia == 4)
    {
        msn = 'quinta'
    } else if (dia == 5)
    {
        msn = 'sexta'
    } else if (dia == 6)
    {
        msn = 'sábado'
    }
    return msn;
}

export function fatorial (num){
    let x = 1;

    for (let i= num; i > 1; i--){
        x = x * i;
    }

    return x;
}

export function sequencia (limite) {

for(let numero = 0; numero >= limite; numero++){

    if(numero % 2 == 0){
        return numero;
    }
    
} 

} 