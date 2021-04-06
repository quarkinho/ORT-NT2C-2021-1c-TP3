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
  let tareas = []
  class Tarea {

    constructor(titulo) {
        this.titulo = titulo
        this.terminada = false;
    }

   
   /* funcioncambiobox(eventito) {
      console.log("en funcioncambiobox this:", this)
      this.terminada = eventito.target.checked
      renderizar()
    }
*/
  }


  function togglebox(eventito) {
    console.log("en togglebox this:", this)
    this.terminada = eventito.target.checked
    renderizar()
  }

  function addTodo() {
    const titulo = prompt("Ingrese tarea")
    const tarea = new Tarea(titulo)
    tareas.push(tarea)

    renderizar()

  }

  function renderizar() {

    list.innerHTML = ""

    tareas.map((tarea)=> {



        const cb = document.createElement('input')
        cb.type = "checkbox"
        cb.className = classNames.TODO_CHECKBOX
        cb.checked = tarea.terminada
        cb.onchange = togglebox.bind(tarea)
        //cb.onchange = tarea.funcioncambiobox
  
        const span = document.createElement('span')
        span.className = classNames.TODO_TEXT
        span.innerHTML = tarea.titulo
        const li = document.createElement('li')

        li.className = classNames.TODO_ITEM
        li.appendChild(span)
        li.appendChild(cb)
        list.appendChild(li);

    })

    itemCountSpan.innerHTML = tareas.length
    let unchecked = 0
    tareas.map((t)=> {
        if (!t.terminada)
            unchecked++
    })
    uncheckedCountSpan.innerHTML = unchecked

  }




   