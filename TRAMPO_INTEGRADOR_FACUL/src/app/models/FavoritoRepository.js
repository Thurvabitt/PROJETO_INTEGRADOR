//conexão com o banco de dados
const conexao = require('../database/conexao');


// Cria um novo favoritoss no banco 
const create = async (favoritos) => {
  const sql = "INSERT INTO favoritos SET ?;";
  try {
    const resultado = await new Promise((resolve, reject) => {
      conexao.query(sql, favoritos, (erro, resultado) => {
        if (erro) reject('Não foi possível criar um Favorito');
        resolve(resultado);
      });
    });
    return JSON.parse(JSON.stringify(resultado));
  } catch (error) {
    console.log(error);
    throw new error;
  }
};


const findAll = async () => {
  const sql = "SELECT * FROM favoritos;";
  try {
    const resultado = await new Promise((resolve, reject) => {
      conexao.query(sql, (erro, resultado) => {
        if (erro) reject('Não foi possível listar os favoritos');
        resolve(resultado);
      });
    });
    return JSON.parse(JSON.stringify(resultado));
  } catch (error) {
    throw error;
  }
};


const findById = async (id) => {
  const sql = "SELECT * FROM favoritos WHERE id=?;";
  try {
    const resultado = await new Promise((resolve, reject) => {
      conexao.query(sql, id, (erro, resultado) => {
        if (erro) reject('Não foi possível encontrar um evento favoritado pelo ID inserido');
        resolve(resultado);
      });
    });
    return JSON.parse(JSON.stringify(resultado));
  } catch (error) {
    throw error;
  }
};


const update = async (favorito, id) => {
  const sql = "UPDATE favoritos SET ? WHERE id=?;";
  try {
    const resultado = await new Promise((resolve, reject) => {
      conexao.query(sql, [favorito, id], (erro, resultado) => {
        if (erro) reject('Não foi possível atualizar os dados do evento favoritado');
        resolve(resultado);
      });
    });
    return JSON.parse(JSON.stringify(resultado));
  } catch (error) {
    throw error;
  }
};



const deletefavorito = async (id) => {
  const sql = "DELETE FROM favoritos WHERE id=?;";
  try {
    const resultado = await new Promise((resolve, reject) => {
      conexao.query(sql, id, (erro, resultado) => {
        if (erro) reject('Não foi possível deletar este evento favoritado');
        resolve(resultado);
      });
    });
    return JSON.parse(JSON.stringify(resultado));
  } catch (error) {
    throw error;
  }
};


// Exporta as funções do repositório
module.exports = { create, findAll, findById, update, deletefavorito };