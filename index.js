const chalk = require('chalk');
const fs = require('fs');

function trataErro(erro){
  throw new Error(chalk.red(erro.code))
}

async function pegaArquivo(caminho){
  const encodig = 'utf-8';
  try{  
    const texto = await fs.promises.readFile(caminho, encoding)
    console.log(chalk.green(texto))
  }catch(erro){
    trataErro(erro)
  }
  

}

/* function pegaArquivo (caminhoDoArquivo){
  const encoding = 'utf-8'
  fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
   fs.promises
   .readFile(caminhoDoArquivo, encoding,)
   .then((texto) => console.log(texto))
   .then((erro) => trataErro(erro))

  })
} */

pegaArquivo('./arquivos/texto1.md')