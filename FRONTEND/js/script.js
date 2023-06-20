const modal = document.querySelector('.modal-container'); //pegando os id lááá do html
const tbody = document.getElementById('user-list');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const btnSalvar = document.getElementById('btnSalvar');

//guardar usuarios AQUI
let usuarios = [];
let editIndex; //tentativa falha de armazenar o usuario em edição AQUI

function openModal(edit = false, index = 0) {  //abrir a tela de cadastro da pessoa 
  modal.classList.add('active');

  modal.onclick = (e) => {                    //agora fazendo com q quando clicar fora da caixa, ela feche
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active');
    }
  };

  btnSalvar.addEventListener('click', () => {
    const novoUsuario = {                       //objeto que deveria criar e salvar o usuario no banco
      nome: nome.value,
      email: email.value,
      senha: senha.value
    };

    fetch('http://localhost:3000/usuarios/adicionarUsuario', { //era pra ser uma requisição POST pra adicionar usuario
      method: 'POST',
      body: JSON.stringify(novoUsuario)
    })
      .then(response => response.json())
      .then(data => {
        console.log("ok");
      })
      .catch(error => {
        console.error("Não foi possível adicionar o usuário");
      });
  });


  if (edit) { // Preenche o form com os dados do usuário em edição, se estiver tudo ok
    const usuario = usuarios[index];
    nome.value = usuario.nome;
    email.value = usuario.email;
    senha.value = usuario.senha;
  } else {      // Limpa se n estiver em modo de edição
    nome.value = '';
    email.value = '';
    senha.value = '';
  }
}

function deleteItem(index) { //aquele botãozinho de lixeira pra excluir um item da lista de usuários
  usuarios.splice(index, 1);
  saveUsuarios();
  loadUsuarios();
}

function insertItem(usuario, index) {
  const tr = document.createElement('tr'); //tr pra criar uma linha a mais na tabelinha 

  tr.innerHTML = `
    <td>${usuario.nome}</td>
    <td>${usuario.email}</td>
    <td>${usuario.senha}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit'></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `;

  tbody.appendChild(tr); //mais tr pra isso tudo ser adicionado em linha nova na tabela
}

btnSalvar.onclick = (e) => { //botão salvar
  e.preventDefault();

  const usuario = { //Cria um objeto de usuário com os dados preenchidos
    nome: nome.value,
    email: email.value,
    senha: senha.value,
  };

  if (editIndex !== undefined) {   //negócio pra atualizar usuário ou adiciona um novo usuário naquele array do inicio
    usuarios[editIndex] = usuario;
  } else {
    usuarios.push(usuario);
  }

  saveUsuarios();   // Salva os usuários no armazenamento local(era pra ser no banco né), fecha a janelinha dos inputs e recarrega a lista de usuários
  modal.classList.remove('active');
  loadUsuarios();
  editIndex = undefined;
};

function editItem(index) { // Função para editar alguma coisinha da lista de usuários
  openModal(true, index);  // linha que faz a janelinha abrir ao clicar em editar 
  editIndex = index;
}

function loadUsuarios() {// Função de carregar os usuários do armazenamento local(ERA PRA SER DO BANCOOO) e exibir na tabela

  usuarios = getUsuarios();   // Insere os usuários na tabela nesse processin de regarregar
  tbody.innerHTML = '';

  usuarios.forEach((usuario, index) => {
    insertItem(usuario, index);
  });
}

function getUsuarios() {
  const usuariosData = localStorage.getItem('usuarios'); //obter os usuários do armazenamento local(preciso mudar pra pegar do banco)
  return usuariosData ? JSON.parse(usuariosData) : [];
}

function saveUsuarios() { //Função para salvar os usuários
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

loadUsuarios(); //pra acabar ele carrega os usuários e exibe na tabela quando carrega a página
