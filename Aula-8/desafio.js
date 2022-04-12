/* transformar notas escolares
  crie um algoritmo que transforme notas do sistema
  numerico para sistema de notas em caracteres tipo A B C
  
  * de 90 para cima - A
  * entre 80 a 89   - B
  * entre 70 a 79   - C
  * entre 60 a 69   - D
  * menor que 60    - F
  * 
*/

let notaAluno = 65;
let conceito = 'A'
if(notaAluno >= 90) {
    conceito = ''
    console.log(`aluno aprovado! sua pontuação foi: ${notaAluno} e seu conceito é: nota ${conceito} nota excelente Parabéns`);
} else if(notaAluno >= 80 && notaAluno <= 89) {
    conceito = 'B'
    console.log(`aluno aprovado! sua pontuação foi: ${notaAluno} e seu conceito é: nota ${conceito} ótima nota Parabéns`);
} else if(notaAluno >= 70 && notaAluno <= 79) {
    conceito = 'C'
    console.log(`aluno aprovado! sua pontuação foi: ${notaAluno} e seu conceito é: nota ${conceito} vamos melhorar essa nota Parabéns`);
} else if(notaAluno >= 60 && notaAluno <= 69 ) {
    conceito = 'D'
    console.log(`aluno aprovado! sua pontuação foi: ${notaAluno} e seu conceito é: nota ${conceito} essa foi por pouco Parabéns`);
} else {
    conceito = 'F'
    console.log(`aluno reprovado! sua pontuação foi: ${notaAluno} e seu conceito é: nota ${conceito}, mais empenho na proxima `);
}