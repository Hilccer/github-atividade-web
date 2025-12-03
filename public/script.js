document.getElementById('signup-form').addEventListener('submit', function(e) {
    // 1. Impede que a página recarregue ao clicar no botão
    e.preventDefault(); 
    
    // 2. Esconde o formulário de cadastro
    this.style.display = 'none';
    
    // 3. Mostra a mensagem de sucesso escondida
    document.getElementById('msg-sucesso').style.display = 'block';

    // Aqui você poderia adicionar código para enviar os dados para um servidor real no futuro
});