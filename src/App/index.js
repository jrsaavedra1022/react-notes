// import './App.css';
import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";


// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false},
//   { text: 'Tomar agua', completed: false},
//   { text: 'Llorar con la llorana', completed: true}
// ];

function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
