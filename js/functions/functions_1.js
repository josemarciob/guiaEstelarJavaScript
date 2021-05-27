// function expression
// function anonymous

// parâmetros (parameters)
/*
    const sum = function(number1, number2){
        console.log(number1 + number2);
    }

    sum(2, 3) // arguments - argumentos
    */

/*
    const sum = function(number1, number2){
        let total = number1 + number2
        return total
    }

    let number1 = 34
    let number2 = 25

    console.log(`o número 1 é ${number1}`);
    console.log(`o número 2 é ${number2}`);
    console.log(`a soma é ${sum(number1, number2)}`);

*/

// function scope
/*
    let subject = 'create video'
    function createThink(subject) {
        subject = 'study'
        return subject
    }
    console.log(createThink(subject))
    console.log(subject);
*/

//a partir do momento que nao tenha argumento, ele desconsidera a primeira e sobrescreve pegando o subject do scopo anterior

    let subject
    function createThink() {
        subject = 'study'
    }
    console.log(subject)
    createThink();
    console.log(subject);