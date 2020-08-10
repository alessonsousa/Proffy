import express from 'express';

const app = express();

app.use(express.json());

// GET: Buscar ou listar uma informação
// POST: Criar alguma nova informação
// PUT: atualizar uma informação existente
// DELETE: Deletar uma informção existente

app.get('/', (request, response) => {
 console.log(request.body);

    const users = [
        { name: 'alesson', age: 19}
    ];
    return response.json(users);
});
//localhost:3333
app.listen(3333);