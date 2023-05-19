import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';

function TodoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext);

    return (
     <React.Fragment>
        { totalTodos === completedTodos && (
            <h2 className="title">¡Felicidades, completaste todos los TODOs!</h2>
        )}
        {totalTodos !== completedTodos && (
            <h2 className="TodoCounter">
                Has completado <span>{completedTodos}</span>
                de <span>{totalTodos}</span> TODOs
            </h2>
        )}
     </React.Fragment>
    );
}

export { TodoCounter };