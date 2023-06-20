const mysql = require('mysql2') // Importando conexão com MySQL

// Configuração da conexão aqui ó
const conexao = mysql.createConnection({ 

   host: 'localhost',
   port: 3306, 
   user: 'root',
   password: '1234',
   database: 'bdusuarios'
})


// Conectando com o banco
conexao.connect()


// Exportei a conecteixon
module.exports = conexao