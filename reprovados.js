const alunos = ["Ana", "Bianca", "Carmen", "Douglas"];

const medias = [7 , 4.5, 8 , 7.5];

const reprovados = alunos.filter((_ , indice) => {
    return medias[indice] < 6 ;
});

console.log(reprovados);