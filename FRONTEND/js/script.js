const modal = document.querySelector('.modal-container');
const tbody = document.getElementById('user-list');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const btnSalvar = document.getElementById('btnSalvar');

let usuarios = [];
let editIndex;

function openModal(edit = false, index = 0) {
  modal.classList.add('active');

  modal.onclick = (e) => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active');
    }
  };

  btnSalvar.addEventListener('click', () => {
    const novoUsuario = {
      nome: nome.value,
      email: email.value,
      senha: senha.value
    };

    fetch('http://localhost:3000/usuarios/adicionarUsuario', {
      method: 'POST',
      body: JSON.stringify(novoUsuario)
    })
      .then(response => response.json())
      .then(data => {
        console.log("Usuário adicionado com sucesso");
      })
      .catch(error => {
        console.error("Não foi possível adicionar o usuário");
      });
  });

  if (edit) {
    const usuario = usuarios[index];
    nome.value = usuario.nome;
    email.value = usuario.email;
    senha.value = usuario.senha;
  } else {
    nome.value = '';
    email.value = '';
    senha.value = '';
  }
}

function deleteItem(index) {
  usuarios.splice(index, 1);
  saveUsuarios();
  loadUsuarios();
}

function insertItem(usuario, index) {
  const tr = document.createElement('tr');

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

  tbody.appendChild(tr);
}

btnSalvar.onclick = (e) => {
  e.preventDefault();

  const usuario = {
    nome: nome.value,
    email: email.value,
    senha: senha.value,
  };

  if (editIndex !== undefined) {
    usuarios[editIndex] = usuario;
  } else {
    usuarios.push(usuario);
  }

  saveUsuarios();
  modal.classList.remove('active');
  loadUsuarios();
  editIndex = undefined;
};

function editItem(index) {
  openModal(true, index);
  editIndex = index;
}

function loadUsuarios() {
  usuarios = getUsuarios();
  tbody.innerHTML = '';

  usuarios.forEach((usuario, index) => {
    insertItem(usuario, index);
  });
}

function getUsuarios() {
  const usuariosData = localStorage.getItem('usuarios');
  return usuariosData ? JSON.parse(usuariosData) : [];
}

function saveUsuarios() {
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

loadUsuarios();