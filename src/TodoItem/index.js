import React from 'react';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import './TodoItem.css';

function TodoItem(props){

    return (
        <li className="TodoItem">
            <CompleteIcon
                completed={ props.item.completed }
                onComplete={ props.onComplete }
            />
            <p className={`TodoItem-p ${props.item.completed && 'TodoItem-p--complete'}`}>
                {props.item.text}
            </p>
            <DeleteIcon
                onDelete={ props.onDelete }
            />

        </li>
    );
}

export { TodoItem };