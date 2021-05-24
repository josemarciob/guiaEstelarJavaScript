/*
    String
    
    * Cadeia de caracteres

    "" // aspas duplas
    '' // aspas simples
    `` // template literals ou template strings

*/

console.log('Marcio')
console.log(`Marcio ${1 + 1}`)
console.log(
     `Marcio 
     ${1 + 1}
`)

/*
    Number
        * números
    33 // inteiros
    12.5 // reias
    NaN // Not a Number
    Infinity // infinito
*/

console.log(12.5 + 33)

/*
    Boolean
        * somente 2 valores

            true // verdadeiro
            false // falso
*/
console.log(true)

/*
* Undefined
    * indefinido
     
* null
    * nulo
    * objeto que nao possui nada dentro
    * diferente de indefinido
*/

console.log(null === undefined) //false

/*
    *Object
        * Objeto
        * Propriedades / Atributos
        * Funcionalidades / Métodos
    
    { propriedade: "valor" }
*/
console.log({
    name: "Marcio",
    idade: 22,
    andar: function() {
        console.log('andar')
    }
})

/*
* Array (Vetores)
    * Uma lista
    * Agrupamento de dado
    
    ["Marcio", 22]
*/ 

console.log([
    "Leite",
    "Ovos",
    2,
    3
])
