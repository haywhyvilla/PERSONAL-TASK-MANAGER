import React from "react";
import { nanoid } from "nanoid";
import classNames from "classnames";
import { Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import TodoList from "./TodoList";
const Urgent = () => {
  const urgentTask = useSelector((state) => state.todoapp.urgentTask);
  return (
    <Droppable droppableId="urgentTask" key={nanoid()}>
      {(provided, snapshot) => (
        <div
          className={classNames({
            "bg-gray-100 dark:bg-[#20212c] shadow-2xl w-[80%] mx-auto md:w-[30rem] rounded-xl p-5 text-sm font-medium text-gray-600 overflow-auto md:m-0 m-4": true,
            "bg-yellow-100": snapshot.isDraggingOver,
          })}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <h1 className="text-xl font-bold text-gray-600 border-b border-gray-600 pb-2 flex items-center justify-between pr-3">
            <span>URGENT TASK</span>
            <span className="text-sm">{urgentTask.length}</span>
          </h1>
          <div className="mt-3">
            {urgentTask.map((todo, index) => (
              <TodoList key={index} todo={todo} index={index} />
            ))}
          </div>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Urgent;
