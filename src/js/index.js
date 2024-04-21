
const botaoMostraProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostraProjetos.addEventListener('click', () => {
    botaoMostrarProjetos()
    esconderBotao()
})

function esconderBotao() {
    botaoMostraProjetos.classList.add("remover");
}

function botaoMostrarProjetos() {
    projetosInativos.forEach(projetoInativo => {
    projetoInativo.classList.add('ativo');
});
}