//throw -> lançar
// try -> tentar
// catch -> pegar

function sayMyName(name = "") {
    if (name === '') {
       throw 'nome é obrigatorio' 
    }

    console.log('depois do erro');
}

//try...catch
try{
    sayMyName()
} catch(e) {
    console.log(e)
}