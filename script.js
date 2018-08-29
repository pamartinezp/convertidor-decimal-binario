window.onload = function()
{
    console.log("hola mundo");
}

function convertir()
{
    console.log("entro a la funcion");
    var numinf=document.getElementById("texto");
    console.log(numinf.value);
    var nume=numinf.value;
    console.log(nume);
    var cont=0;
    var resu=0;
    var vlrbin;
    
    for(var i=0; i<=100; i++)
    {
        vlrbin=nume%2;
        console.log("el modulo de la operacion es: ",vlrbin);
        resu=nume/2;
        console.log("el resultado de la division es: ",resu);
        resu=Math.trunc(resu);
        console.log("la parte entera del resultado es: ",resu);
        nume=resu;
        console.log("el valor del numerador ahora es: ",nume);
        salida.innerHTML=vlrbin+salida.innerHTML;
        if(nume<2)
        {
            salida.innerHTML=nume+salida.innerHTML;
            i=100;
        }
        console.log("el valor del indice es: ",i);
    }
    console.log("termino el for");
}