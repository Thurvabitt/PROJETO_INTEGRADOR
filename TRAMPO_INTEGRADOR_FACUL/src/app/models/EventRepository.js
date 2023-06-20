//conexão com o banco de dados
const conexao = require('../database/conexao');


// Cria um novo favoritoss no banco 
const create = async (events) => {
  const sql = "INSERT INTO events SET ?;";
  try {
    const resultado = await new Promise((resolve, reject) => {
      conexao.query(sql, events, (erro, resultado) => {
        if (erro) reject('Não foi possível criar um evento');
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
  const sql = "SELECT * FROM events;";
  try {
    const resultado = await new Promise((resolve, reject) => {
      conexao.query(sql, (erro, resultado) => {
        if (erro) reject('Não foi possível listar os eventos');
        resolve(resultado);
      });
    });
    return JSON.parse(JSON.stringify(resultado));
  } catch (error) {
    throw error;
  }
};


const findById = async (id) => {
  const sql = "SELECT * FROM events WHERE id=?;";
  try {
    const resultado = await new Promise((resolve, reject) => {
      conexao.query(sql, id, (erro, resultado) => {
        if (erro) reject('Não foi possível encontrar um evento pelo ID inserido');
        resolve(resultado);
      });
    });
    return JSON.parse(JSON.stringify(resultado));
  } catch (error) {
    throw error;
  }
};


const update = async (events, id) => {
  const sql = "UPDATE events SET ? WHERE id=?;";
  try {
    const resultado = await new Promise((resolve, reject) => {
      conexao.query(sql, [events, id], (erro, resultado) => {
        if (erro) reject('Não foi possível atualizar os dados do evento');
        resolve(resultado);
      });
    });
    return JSON.parse(JSON.stringify(resultado));
  } catch (error) {
    throw error;
  }
};



const deleteevents = async (id) => {
  const sql = "DELETE FROM events WHERE id=?;";
  try {
    const resultado = await new Promise((resolve, reject) => {
      conexao.query(sql, id, (erro, resultado) => {
        if (erro) reject('Não foi possível deletar este evento');
        resolve(resultado);
      });
    });
    return JSON.parse(JSON.stringify(resultado));
  } catch (error) {
    throw error;
  }
};


// Exporta as funções do repositório
module.exports = { create, findAll, findById, update, deleteevents };