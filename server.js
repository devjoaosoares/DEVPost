import express from 'express'; // Importando o Express para criar o servidor
import userRoutes from './app/controllers/userRoutes.js'; // Importando as rotas do usuário


const app = express(); //Definindo app como uma instância do Express
const PORT = 3000; //Definindo a porta onde o servidor irá rodar

app.use(express.json());
//Para entender JSON no corpo das requisições

try {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
}
catch (error) {
    console.error('Erro ao iniciar o servidor:', error);
} //remover no final do desenvolvimento!

app.get('/status', userRoutes); //Rota de teste
