import React from "react";
import { nanoid } from "nanoid";
import classNames from "classnames";
import { Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import TodoList from "./TodoList";

const ToStudy = () => {
  const todos = useSelector((state) => state.todoapp.toStudyTask);

  
  const searchInputValue = useSelector(
    (state) => state.todoapp.searchInputValue
  );

  const filteredTodoTask = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchInputValue)
  );

  return (
    <Droppable droppableId="toStudyTask" key={nanoid()}>
      {(provided, snapshot) => (
        <div
          className={classNames({
            "bg-gray-100 dark:bg-[#20212c] shadow-lg w-[80%] mx-auto md:w-[30rem] p-5 rounded-xl overflow-auto md:m-0 m-4": true,
            "bg-red-100": snapshot.isDraggingOver,
          })}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <h1 className="text-xl font-bold text-gray-600 border-b border-gray-600 pb-2 flex items-center justify-between pr-3">
            <span>TO STUDY</span>
            <span className="text-sm">{todos.length}</span>
          </h1>
          <div className="mt-3">
            {filteredTodoTask.map((todo, index) => (
              <TodoList key={index} todo={todo} index={index} />
            ))}
          </div>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default ToStudy;
