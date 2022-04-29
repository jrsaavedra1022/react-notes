import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm(){
    const [ newTodoValue, setNewTodoValue] = React.useState('');

    const { addTodo, setOpenModal } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    };

    const onAdd = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onAdd}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                value={ newTodoValue }
                onChange={ onChange }
                placeholder="Ingrese su nuevo TODO"
            />
            <div className="TodoForm-buttonContainer">
                <buttton
                    type="button"
                    className="TodoForm-button TodoForm-button-cancel"
                    onClick={onCancel}
                >Cancelar</buttton>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button-add"
                >Añadir</button>
            </div>
        </form>
    );
}

export { TodoForm };