import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { BsPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addTodoTask } from "../Redux/Todo/todoSlice";
import { nanoid } from "nanoid";
import moment from "moment";

const NewTodoBtn = () => {
  const dispatch = useDispatch();

  // const addcatergories = async () => {
  //   const { value: catergories } = await Swal.fire({
  //     title: "Select field validation",
  //     input: "select",
  //     inputOptions: {
  //       urgent: "urgent",
  //       study: "study",
  //       later: "later",
  //       important: "important",
  //       completed: "completed",
  //     },
  //     inputPlaceholder: "Select a catergiory",
  //     showCancelButton: true,
  //   });

  //   if (catergories) {
  //     Swal.fire("You selected: " + catergories);
  //   }
  // };

  const newTodoItemModal = async () => {
    const { value } = await Swal.fire({
      input: "textarea",
      // html:
      //   "Some Text" +
      //   "<br>" +
      //   '<button type="button" role="button" tabindex="0" class="SwalBtn1 customSwalBtn">' +
      //   "Button1" +
      //   "</button>" +
      //   '<button type="button" role="button" tabindex="0" class="SwalBtn2 customSwalBtn">' +
      //   "Button2" +
      //   "</button>",
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
