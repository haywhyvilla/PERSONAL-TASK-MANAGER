import React from "react";
import { nanoid } from "nanoid";
import classNames from "classnames";
import { Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import TodoList from "./TodoList";

const Completed = () => {
  const completedTask = useSelector((state) => state.todoapp.completedTask);
  return (
    <Droppable droppableId="completedTask" key={nanoid()}>
      {(provided, snapshot) => (
        <div
          className={classNames({
            "bg-gray-100 dark:bg-[#20212c] shadow-lg w-[80%] mx-auto md:w-[30rem] rounded-xl p-5 text-sm font-medium text-gray-600 overflow-auto md:m-0 m-4": true,
            "bg-green-100": snapshot.isDraggingOver,
          })}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <h1 className="text-xl font-bold text-gray-600 border-b border-gray-600 pb-2 flex items-center justify-between pr-3">
            <span>COMPLETED</span>
            <span className="text-sm">{completedTask.length}</span>
          </h1>
          <div className="mt-3">
            {completedTask.map((todo, index) => (
              <TodoList key={index} todo={todo} index={index} />
            ))}
          </div>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Completed;
