const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}


const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');
const alertaIncompleto = document.getElementById('alerta-incompleto');

var countUnchecked = 0;  // Esto es para que no se me quede en un scope.
var idLista = 0;

function addTodo() {
  let texto = prompt("Escriba la tarea.");
  console.log(texto);
  if(texto == ""){
    alertaIncompleto.innerHTML = "Ingrese una tarea.";
  }else{
    alertaIncompleto.innerHTML = "";
    // CREO LA LISTA
  const myList = document.createElement('li');  // Si lo hago una constante puedo usar .className
  myList.id = idLista;  // La manera mas linyera posible, le asigno el mismo ID a este y al botón, saca siempre primero la lista.
  myList.className = classNames.TODO_ITEM;
    // CREO LOS DEMAS
  newTODO = createTODO(texto);
  checkmark = createCheckmark();
  deleteButton = createDelete();
    // ASIGNO TODO
  list.appendChild(myList);
  myList.append(checkmark, newTODO, deleteButton); // Agrega ambos de una.-.. No se si es correcto.-
  addNewGeneralCounter();
  updateID();
  }
}

function addNewGeneralCounter(){
  updateGeneralCounter();
  countUnchecked++;
  updateUnchecked();
}

function updateUnchecked(evento){
  if(evento == null){  // Así aseguro que el evento.target no me tire error y de paso actualizo a tiempo real.
    uncheckedCountSpan.innerHTML = countUnchecked;
  }else{
    if(evento.target.checked){  // El objeto Event lo levanta solo
      countUnchecked--;
      updateUnchecked();
    }else{
      countUnchecked++;
      updateUnchecked();
    }
  }
}

function deleteSelected(evento){  // Esto la verdad no me gusta pero funciona así que... ¯\_(ツ)_/¯
  if(evento != null){
  let toDel = document.getElementById(evento.target.id);  // Lo asigno para que no me quede todo en una línea
  inputARemover = toDel.getElementsByTagName('input')[0]; // El demonio, me pasa el checkbox que necesito. No se si hay alguna forma con Childnodes.
  list.removeChild(toDel);
  removeFromCounters(inputARemover);
  }
}

function removeFromCounters(inputARemover){ // La verdad queda horrible esto pero que le vamo a hacer
  if(inputARemover != null){
    if(!inputARemover.checked){
      countUnchecked--;
    }
  }
  updateUnchecked();
  updateGeneralCounter();
}

function updateGeneralCounter(){  // Esto simplemente actualiza.
  itemCountSpan.innerHTML = list.getElementsByTagName('li').length;
}

function updateID(){ // Esto es inútil pero en una de esas le podes dar un uso
  idLista++;  
}

function createTODO(texto){
  const newTODO = document.createElement('span');
  newTODO.className = classNames.TODO_TEXT;
  newTODO.innerHTML = texto;
  return newTODO;
}

function createCheckmark(){
  const checkmark = document.createElement('input');
  checkmark.type = "checkbox";
  checkmark.className = classNames.TODO_CHECKBOX;
  checkmark.onchange = updateUnchecked;
  return checkmark;
}

function createDelete(){
  const deleteBttn = document.createElement('button');
  deleteBttn.className = "delete-button";
  deleteBttn.onclick = deleteSelected;
  deleteBttn.innerHTML = "Delete";
  deleteBttn.id = idLista;
  return deleteBttn;
}