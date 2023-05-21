import React from "react";
import Completed from "./Completed";
import Urgent from "./Urgent";
import Important from "./Important";
import Later from "./Later";
import ToStudy from "./ToStudy";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { todoDrag } from "../Redux/Todo/todoSlice";

const Main = () => {
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    dispatch(todoDrag(result));
  };

  return (
    <div className="h-[520px] mt-5 md:flex justify-between gap-x-9 md:w-11/12 mx-auto">
      <DragDropContext onDragEnd={onDragEnd}>
        <ToStudy />
        <Later />
        <Important />
        <Urgent />
        <Completed />
      </DragDropContext>
    </div>
  );
};

export default Main;
