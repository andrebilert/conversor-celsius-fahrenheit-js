/* 
Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

Formulas:
C = (F - 32) * 5/9 
F = C * 9/5 + 32 
*/

 function transformDegree(degree) {

    //Transforma tudo para maiusculo pois o usuário poderá digitar minusculo, depois verifica se existe Celsius
    const celsiusExists = degree.toUpperCase().includes('C')

    //Transforma tudo para maiusculo pois o usuário poderá digitar minusculo, depois verifica se existe Fahrenheit
    const fahrenheitExists = degree.toUpperCase().includes('F')

    //Se for diferente de C e F aplicamos uma mensagem de erro com throw
    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado')
    }

    //Cenário ideal
    //Se for F para C tem que fazer

    //1- Atualizar a string para Number, deixar tudo em maiusculo caso não esteja, depois trocar o F por nada, utilizando replace
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));

    //2- Arrow function para converter o valor de Fahrenheit para Celsius
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9

    //3- Variavel que recebera o sinal
    let degreeSign = 'C'

    //Cenário caso seja C para f
    //Utilizando as mesmas variaveis crio para celsius
    if(celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = (celsius) => celsius * 9/5 + 32
        degreeSign = 'F'
        return formula (updatedDegree) + degreeSign
    }

    //4- Concatenando o valor que a function retornou juntamente com o a letra correta
    return formula(updatedDegree) + degreeSign
 }

//Testando a mensagem de erro caso o usuário digite um letra que não seja F e C, testando também se for cenário ideal com F e C
try {
        console.log(transformDegree('10C'))//C para F
        console.log(transformDegree('50F'))//F para C
        transformDegree('50z')//erro
    }
catch(error) 
    {
        //error mostra infos de onde está o erro, error.message ele só mostra a mensagem definida
        console.error(error.message)
    }