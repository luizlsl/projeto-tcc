//requisição de modulos
    const express = require('express')
    const app = express()

//configurações da aplicação
    const PORT = 3001

//Gerenciamento de rotas
    app.get('/', (req, res) => {
        res.send('Hellow Word!!')
    })

//Iniciando servidor local da aplicação
    app.listen(PORT, () => {
        console.log(`Servidor rodando em: http://localhost:${PORT}`)
    })