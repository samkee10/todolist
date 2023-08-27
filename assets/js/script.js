let taskInput = document.getElementById("taskInput")
let btnAdd = document.getElementById("btnAdd")
let total = document.getElementById("total")
let realizados = document.getElementById("realizados")
let lista = document.getElementById("lista")


let tasks = [
    { id: 1, description: "Leer 10 paginas de un libro", completado: false},
    { id: 2, description: "Completar el desafio semanal",    completado: false},
    { id: 3, description: "hacer el almuerzo para el siguiente dia",  completado: false},
  ]

  function taskComplete(){
    let contador = 0
    tasks.forEach(tarea => {
        if (tarea.completado == true){
            contador += 1
        }
    })
    realizados.innerHTML = contador
}

btnAdd.addEventListener("click", () => {
    const a = new Date()
    let uid = a.getHours() + a.getMinutes() + a.getSeconds()
    let tareaNueva = taskInput.value
    if (tareaNueva != ''){
        tasks.push({id:uid, description:tareaNueva, completado:false})
        taskInput.value = ''
        renderTasks()
    }else{
        alert('Ingrese una tarea para poder agregarla a la lista')
    }
})

function borrar(id){
    let indice = tasks.findIndex((ele) => ele.id == id)
    tasks.splice(indice,1)
    renderTasks()
    console.table(tasks)
}
function realizado(id){
    let indice = tasks.findIndex((ele) => ele.id == id)
    if (tasks[indice].completado == false){
        tasks[indice].completado = true
        renderTasks()
    }else{
        tasks[indice].completado = false
        renderTasks()
    }
    console.table(tasks)
}

function renderTasks(){
    let html = ''
    tasks.forEach(tarea => {
        if (tarea.completado == false){
            html += `
            <tr></tr>
                <td>${tarea.id}</td>
                <td style="color: black">${tarea.description}</td>
                <td><button onClick="realizado(${tarea.id})">Listo</button></td>
                <td onclick="borrar(${tarea.id})">❌</td>
            </tr>
            `
        }else{
            html += `
            <tr>
                <td>${tarea.id}</td>
                <td style="color: green"><del>${tarea.description}</del></td>
                <td><button onClick="realizado(${tarea.id})">desmarcar</button></td>
                <td onclick="borrar(${tarea.id})">❌</td>
            </tr>
            `
        }
    })
    total.innerHTML = tasks.length
    lista.innerHTML = html
    todoChecked()
}

renderTasks()