"use strict";
const openModal = () =>
  document.getElementById("modal").classList.add("active");

const closeModal = () => {
  clearFields();
  document.getElementById("modal").classList.remove("active");
};

const getLocalStorage = () =>
  JSON.parse(localStorage.getItem("dbProduto")) ?? [];
const setLocalStorage = (dbProduto) =>
  localStorage.setItem("dbProduto", JSON.stringify(dbProduto));

const deleteProduto = (index) => {
  const dbProduto = readProduto();
  dbProduto.splice(index, 1);
  setLocalStorage(dbProduto);
};

const updateProduto = (index, produto) => {
  const dbProduto = readProduto();
  dbProduto[index] = produto;
  setLocalStorage(dbProduto);
};

const readProduto = () => getLocalStorage();

const searchProduto = (event) => {
  const dbProduto = readProduto();
  const search = event.target.value.toLowerCase();
  const filteredProduto = dbProduto.filter(produto => produto.nome.toLowerCase().includes(search)
  || produto.preco.toLowerCase().includes(search)
  || produto.categoria.toLowerCase().includes(search)
  || produto.descricao.toLowerCase().includes(search))
  .map((produto, index) => {
    return `<td>${produto.nome}</td>
    <td>${produto.fabricante}</td>
    <td>${produto.tipo}</td>
    <td>${produto.quantidade}</td>
    <td>R$ ${produto.preco}</td>
    <td>

      <button type="button" id="edit-${index}" class="button green">Editar</button>
      <button type="button" id="delete-${index}" class="button red">Excluir</button>
    </td>`;
    
  }
  ).join("");
  document.querySelector("#tableProtudo>tbody").innerHTML = filteredProduto;
}


  document.getElementById("search").addEventListener("click", searchProduto);

const createProduto = (produto) => {
  const dbProduto = getLocalStorage();
  dbProduto.push(produto);
  setLocalStorage(dbProduto);
};

//
const div = document.createElement("div");
div.style.backgroundColor = "#2a5cff";
div.style.width = "300px";
div.style.height = "30px";
div.style.justifyContent = "center";
div.style.alignItems = "center";
div.style.borderRadius = "10px";
div.style.textAlign = "center";



const totalProduto = () => {
    const dbProduto = readProduto();
    let total = 0.00;
    if(dbProduto.length > 0){
    dbProduto.forEach((produto) => {
        total += produto.preco * produto.quantidade;
        div.innerHTML = `<h2>Total: R$ ${total},00</h2>`;
    })} else {
        div.innerHTML = `<h2>Total: R$ 0</h2>`;
    }
    document.querySelector("#footer").appendChild(div);
};



const clearFields = () => {
  const fields = document.querySelectorAll(".modal-field");
  fields.forEach((fields) => (fields.value = ""));
};

const isValidFields = () => {
  return document.getElementById("form").reportValidity();
};

const saveProduto = () => {
  if (isValidFields()) {
    const produto = {
      nome: document.getElementById("name").value,
      fabricante: document.getElementById("fabricante").value,
      tipo: document.getElementById("tipo").value,
      quantidade: document.getElementById("quantidade").value,
      preco: document.getElementById("preco").value,
    };
    const index = document.getElementById("name").dataset.index;
    if (index == "new") {
      createProduto(produto);
      totalProduto();
      updateTable();
      closeModal();
    } else {
      updateProduto(index, produto);
      updateTable();
      totalProduto();
      closeModal();
    }
  }
};

const createRow = (produto, index) => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
            <td>${produto.nome}</td>
            <td>${produto.fabricante}</td>
            <td>${produto.tipo}</td>
            <td>${produto.quantidade}</td>
            <td>R$ ${produto.preco}</td>
        <td>
          <button type="button" id="edit-${index}" class="button green">Editar</button>
          <button type="button" id="delete-${index}" class="button red">Excluir</button>
        </td>`;
  document.querySelector("#tableProtudo>tbody").appendChild(newRow);
};

const clearTable = () => {
  const rows = document.querySelectorAll("#tableProtudo>tbody>tr");
  rows.forEach((row) => row.parentNode.removeChild(row));
};

const fillFields = (produto) => {
  document.getElementById("name").value = produto.nome;
  document.getElementById("fabricante").value = produto.fabricante;
  document.getElementById("tipo").value = produto.tipo;
  document.getElementById("quantidade").value = produto.quantidade;
  document.getElementById("preco").value = produto.preco;
  document.getElementById("name").dataset.index = produto.index;
};

const editProduto = (index) => {
  const produto = readProduto()[index];
  produto.index = index;
  fillFields(produto);
  openModal();
};

const editDelete = (event) => {
  if (event.target.type == "button") {
    const [action, index] = event.target.id.split("-");
    if (action == "edit") {
      editProduto(index);
    } else {
      const produto = readProduto()[index];
      const confirmacao = confirm(`Deseja excluir o produto ${produto.nome}?`);
      if (confirmacao) {
        deleteProduto(index);
        totalProduto();
        updateTable();
      }
    }
  }
};

const updateTable = () => {
  const dbProduto = readProduto();
  clearTable();
  dbProduto.forEach(createRow);
};

localStorage.clear();



document
  .getElementById("cadastrarProduto")
  .addEventListener("click", openModal);

document.getElementById("modalClose").addEventListener("click", closeModal);

document.getElementById("saveProduto").addEventListener("click", saveProduto);


document
  .querySelector("#tableProtudo>tbody")
  .addEventListener("click", editDelete);