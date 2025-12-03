// const express = require('express')
// const app = express()
// const path = require('path');
// const PORT = 3000

// app.use(express.static(path.join(__dirname,'public')));
// //Rotas

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.listen(PORT, () =>{
//     console.log(`Servidor rodando na porta ${PORT}`)
// })

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 1. Configurar pasta de arquivos estáticos
// Isso permite que o HTML encontre o style.css e o script.js automaticamente
app.use(express.static(path.join(__dirname, 'public')));

// 2. Rota Principal (Landing Page)
// Quando o usuário acessa 'localhost:3000/', o servidor envia o index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 3. Rota da Nova Página (Obrigatória)
// Quando o usuário acessa 'localhost:3000/autor', o servidor envia a nova-pagina.html
app.get('/autor', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'autor.html'));
});

// // 4. Rota Opcional (Exemplo de 'Obrigado' ou redirecionamento)
app.get('/cadastro-sucesso', (req, res) => {
    // Você poderia criar um arquivo obrigado.html, mas aqui vamos enviar um texto simples
    res.send('<h1 style="color: #00f3ff; background: #050510; height: 100vh; display: flex; align-items: center; justify-content: center;">Obrigado pelo cadastro!</h1>');
});

// 5. Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
    console.log('Pressione CTRL + C para parar o servidor');
});