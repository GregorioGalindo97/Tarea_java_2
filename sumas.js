
function suma(a,b,c){

    let resultado=(a+b+c);
    console.log(resultado);

}

function comparacion(d,e){
    if(d<e){
        console.log("El numero mayor es: "+e);
    }
    else if(e<d){
        console.log("El numero mayor es: "+d);
    }
    else{
        console.log("Los numeros son iguales");
    } 
}
let cliente={
    deporte:'Basquetbol',
    posicion:'centro',
    promedio:'38'

}
const usuario={
    nombre:'Gregorio',
    apellidos:'Galindo Tehuitzil',
    email:'gregorio.galindo9711@hotmail.com',
    carrera:'Ingenieria mecatronica',
    estado:'Puebla',
    salud:{
        sexo:'Masculino',
        edad:'25',
        estatura:'1.79m',
        peso:'70kg'
    },
    hobbies:cliente
}

const arreglo=['Gregorio','Yunuen',25,23,['Pelota','silla']];

const [nombre1, nombre2]=arreglo;
console.log(nombre1,nombre2);
console.log(arreglo[5, 4]);


const suma1=(a,b,c)=>console.log(a+b+c);
const x=10;
const y=11;
const compar1=(x>y);
const correcto5=(x)=>console.log(`El numero mayor es: ${x}`);
const correcto6=(y)=>console.log(`El numero mayor es: ${y}`);
const correcto4=(x)=>x;

correcto4(compar1)==true? correcto5(x):correcto6(y);
suma1(3,3,3);
suma(1,2,3);
comparacion(2,1);
console.log(usuario);