import React from "react";
import Swal from "sweetalert2";
import { BsPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addTodoTask } from "../Redux/Todo/todoSlice";
import { nanoid } from "nanoid";
import moment from "moment";

const NewTodoBtn = () => {
  const dispatch = useDispatch();

  const newTodoItemModal = async () => {
    const { value } = await Swal.fire({
      input: "textarea",
      inputLabel: "New Task",
      inputPlaceholder: "Write a new task",
      showCancelButton: true,
    });

    if (value) {
      dispatch(
        addTodoTask({
          id: nanoid(),
          text: value,
          completed: false,
          time: moment().format("LL"),
          colums: "todos",
        })
      );
    }
  };

  return (
    <div className="bg-btn rounded-3xl text-white hover:bg-blue-700">
      <button
        className="flex items-center justify-center gap-x-2 px-5 py-3 font-bold"
        onClick={newTodoItemModal}
      >
        <BsPlus size={22} />
        Add New Task
      </button>
    </div>
  );
};

export default NewTodoBtn;
