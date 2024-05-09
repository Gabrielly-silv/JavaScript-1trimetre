const alunos = ["Laura","pedro","João","hannah"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos,medias]

function exibeNomeeNota(aluno){
    if (listaDeAlunosEMedias[0].includes(aluno)){
        
        const indice = listaDeAlunosEMedias[0].indexOf(aluno);

        const mediaAluno = listaDeAlunosEMedias[1][indice]

        console.log(`${aluno} tem a média ${mediaAluno}!`)

    }else{
        console.log("aluno(a) não encontrado!")
    }
}
exibeNomeeNota("Laura")
exibeNomeeNota("pedro")
exibeNomeeNota("João")
exibeNomeeNota("hannah")