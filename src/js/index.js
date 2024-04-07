
const botaoMostraProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostraProjetos.addEventListener('click', () => {
    motaoMostraProjetos()
    esconderBotao()
})

function esconderBotao() {
    botaoMostraProjetos.classList.add("remover");
}

function motaoMostraProjetos() {
    projetosInativos.forEach(projetoInativo => {
    projetoInativo.classList.add('ativo');
});
}