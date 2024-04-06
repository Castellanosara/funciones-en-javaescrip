//this//
console.log(this)
this.lugar="hola"

function saludar(saludo){
    console.log(lugar)
}
saludar()
//call.apply//
const obj=  lugar ;{
    lugar ,'hola '
}
saludar.call(obj)
saludar.apply(obj)
//bind//
function saludo (frasedelsaludo) {

console.log('bienvenida:' + frasedelsaludo)

}

const grretUser = saludo.bind(null, 'sara')

grretUser()