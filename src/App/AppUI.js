import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from "../TodoForm";
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';

/*const defaulTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Lalalala', completed: true },
  { text: 'Cantar una cancion', completed: false },
  { text: 'Cantar un poema', completed: true },
  { text: 'Curso de React', completed: false },
];
localStorage.setItem('TODOS_V1', defaulTodos);
localStorage.removeItem('TODOS_V1');
*/



function AppUI () {
  const { 
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal, 
  } = React.useContext(TodoContext);

    return (
        <React.Fragment>
          <TodoCounter />
          <TodoSearch />
          <TodoList>
            {loading && (
            <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
            </>
            )}
            {error && <TodosError />}
            {(!loading && !searchedTodos.length) && <EmptyTodos />}

            {searchedTodos.map(todo => (
             <TodoItem 
               key={todo.text} 
               text={todo.text}
               completed={todo.completed}
               onComplete={() => completeTodo(todo.text)}
               onDelete={() => deleteTodo(todo.text)}
            />
            ))}
             </TodoList>

              {!!openModal && (
                <Modal>
                  <TodoForm />
                </Modal>
              )}

        <CreateTodoButton 
          setOpenModal={setOpenModal}
        />
    </React.Fragment>
  );
}

export { AppUI };