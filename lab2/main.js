"use strict"

let latestDeletedTodo = null
let todoToDelete = null

const addTodo = (text) => {
    if (!text)
        return

    const h1 = document.createElement("h2")
    h1.textContent = text

    const div = document.createElement("div")
    div.appendChild(h1)

    const x = document.createElement("img")
    x.src = "assets/x.svg"
    x.className = "x-icon"

    const li = document.createElement("li")
    li.className = "todo"
    li.appendChild(div)
    li.appendChild(x)

    li.addEventListener("click", (e) => changeDoneState(e))
    x.addEventListener("click", (e) => deleteTodo(e))

    document.getElementById("todos").append(li)
}

const form = document.getElementById("new-todo-form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const todoText = new FormData(form).get("todo-text")
    addTodo(todoText)
    document.getElementById("todo-text").value = ""
})

const changeDoneState = (e) => {
    console.log("Change done state")
    const todoClassList = e.currentTarget.classList
    if (todoClassList.contains("crossed")) {
        todoClassList.remove("crossed")
        e.currentTarget.querySelector("div").querySelector("p").remove()
        return
    }
    const date = document.createElement("p")
    date.textContent = new Date().toDateString()
    e.currentTarget.querySelector("div").appendChild(date)
    todoClassList.add("crossed")
}

const deleteTodo = (e) => {
    e.stopPropagation()
    $("#todoModal").modal("show", e.currentTarget)
}

$("#todoModal").on('show.bs.modal', function (event) {
    todoToDelete = $(event.relatedTarget)
})

$("#deleteId").on("click", (_) => {
    deleteElement(todoToDelete)
    $("#todoModal").modal("hide")
})

const deleteElement = (element) => {
    const li = element[0].parentElement
    latestDeletedTodo = li.querySelector("div").querySelector("h2").textContent
    $("#restore").show()
    li.remove()
}

$("#restore").on("click", (e) => {
    addTodo(latestDeletedTodo)
    $("#restore").hide()
})