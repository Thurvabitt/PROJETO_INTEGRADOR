const express = require('express')
const app = express()
const cors = require('cors')

// Habilitando o uso do JSON no corpo das requisições
app.use(express.json())
const PORT = 3000

const corsOptions = {
    origin: '*'
}
  
app.use(cors(corsOptions))

// Importando as rotas de usuário e favoritos
const Routes = require('./src/app/routes/UsuarioRota')
const FavRoutes = require('./src/app/routes/FavoritoRota')

// Definindo o caminho das rotas
app.use('/usuarios', Routes)
app.use('/favoritos', FavRoutes)

// Iniciando o servidor
app.listen(PORT, () =>{
    console.log('Servidor rodando em Http://localhost:3000')
})