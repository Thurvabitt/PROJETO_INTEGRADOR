// Importando a conexão com banco 
const conexao = require('../database/conexao');


// Criando um bixin novo no banco
const create = async (usuario) => {
  const sql = "INSERT INTO usuarios SET ?;";
  try {
    const resultado = await new Promise((resolve, reject) => {
      conexao.query(sql, usuario, (erro, resultado) => {
        if (erro) reject('Não foi possível criar um usuário');
        resolve(resultado);
      });
    });
    return JSON.parse(JSON.stringify(resultado));
  } catch (error) {
    throw error;
  }
};

//listando os bixin tudo
const findAll = async () => {
  const sql = "SELECT * FROM usuarios;";
  try {
    const resultado = await new Promise((resolve, reject) => {
      conexao.query(sql, (erro, resultado) => {
        if (erro) reject('Não foi possível listar os usuários');
        resolve(resultado);
      });
    });
    return JSON.parse(JSON.stringify(resultado));
  } catch (error) {
    throw error;
  }
};

//procurando os cabeça pelos id
const findById = async (id) => {
  const sql = "SELECT * FROM usuarios WHERE id=?;";
  try {
    const resultado = await new Promise((resolve, reject) => {
      conexao.query(sql, id, (erro, resultado) => {
        if (erro) reject('Não foi possível encontrar pelo ID inserido');
        resolve(resultado);
      });
    });
    return JSON.parse(JSON.stringify(resultado));
  } catch (error) {
    throw error;
  }
};

//atualizando os bixin
const update = async (usuario, id) => {
  const sql = "UPDATE usuarios SET ? WHERE id=?;";
  try {
    const resultado = await new Promise((resolve, reject) => {
      conexao.query(sql, [usuario, id], (erro, resultado) => {
        if (erro) reject('Não foi possível atualizar os dados do usuário');
        resolve(resultado);
      });
    });
    return JSON.parse(JSON.stringify(resultado));
  } catch (error) {
    throw error;
  }
};


//matando os bixin
const deleteUsuario = async (id) => {
  const sql = "DELETE FROM usuarios WHERE id=?;";
  try {
    const resultado = await new Promise((resolve, reject) => {
      conexao.query(sql, id, (erro, resultado) => {
        if (erro) reject('Não foi possível deletar este usuário');
        resolve(resultado);
      });
    });
    return JSON.parse(JSON.stringify(resultado));
  } catch (error) {
    throw error;
  }
};


// Exporta as funções do repositório de usuario aqui
module.exports = { create, findAll, findById, update, deleteUsuario };