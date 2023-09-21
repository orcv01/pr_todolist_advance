import "./Main.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";


const Main = () => {
    // Declaramos dos estados usando el hook useState de React.
    // 1. todoList: Almacena la lista de tareas pendientes.
    // 2. task: Almacena el valor actual del input de entrada de texto.
    const [todoList, setTodoList] = useState([]);
    const [task, setTask] = useState("");

    // Esta función agrega una nueva tarea a la lista.
    const addTodo = () => {
    // Creamos un nuevo objeto 'newTask' con la tarea ingresada,
    // establecemos 'completed' como falso y generamos un 'id' único usando uuidv4().
    const newTask = {
      name: task,
      completed: false,
      id: uuidv4(),
    };

     // Actualizamos la lista de tareas añadiendo el nuevo objeto al final del arreglo 'todoList'.
    // También, reiniciamos el valor del input a una cadena vacía.
    setTodoList([...todoList, newTask]);
    setTask("");
  };
  



    return (
        <h2>Task List</h2>
    )
}

export default Main;
