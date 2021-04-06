const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
  }
  
  
  const list = document.getElementById('todo-list')
  const itemCountSpan = document.getElementById('item-count')
  const uncheckedCountSpan = document.getElementById('unchecked-count')

  let itemCount = 0;
  let uncheckedCount = 0;

  function addTodo() {
      const tarea = prompt("Ingrese tarea")
      const li = document.createElement('li')

      const cb = document.createElement('input')
      cb.type = "checkbox"
      cb.className = classNames.TODO_CHECKBOX
      cb.onchange = funcioncambiobox

      const span = document.createElement('span')
      span.className = classNames.TODO_TEXT
      span.innerHTML = tarea

      li.className = classNames.TODO_ITEM
      li.appendChild(span)
      li.appendChild(cb)
      list.appendChild(li);

      itemCount++;
      uncheckedCount++;
      itemCountSpan.innerHTML = itemCount;
      uncheckedCountSpan.innerHTML = uncheckedCount;
  }


  function funcioncambiobox(eventito) {

      if (eventito.target.checked) {
        uncheckedCount--;
      }
      else
        uncheckedCount++;

        uncheckedCountSpan.innerHTML = uncheckedCount;
  }