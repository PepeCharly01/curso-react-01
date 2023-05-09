import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const {
        saveTodo,
    } = React.useContext(TodoContext);

    const onCancer = () => {
        //
    };

    const onSubmit = () => {
        //
    };

    return (
        <form onSubmit={onSubmit}>
            <label>...</label>
            <textarea 
                placeholder="Cortar la cebolla para el almuerzo"
            />
            <div>
                <button
                    type="button"
                    onClick={onCancer} 
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };