import React from 'react';

import { TodoContext } from '../TodoContext';

import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";

function AppUI(){
    const { error, loading, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal} = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>
            <TodoList>
                { loading && <TodosLoading /> }
                { error  && <TodosError error={error} /> }
                { (!loading && !searchedTodos.length) && <EmptyTodos />}

                { searchedTodos.map(todo => (
                <TodoItem 
                    key={todo.text} 
                    item={todo} 
                    onComplete={ () => completeTodo(todo.text)}
                    onDelete={ () => deleteTodo(todo.text)}
                />
                ))}
            </TodoList>
            { !!openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
            )}
            <CreateTodoButton 
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
}

export { AppUI };