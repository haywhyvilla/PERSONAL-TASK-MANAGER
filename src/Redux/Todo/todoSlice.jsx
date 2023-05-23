import { createSlice } from "@reduxjs/toolkit";

const toStudyTask =
  localStorage.getItem("toStudyTask") !== null
    ? JSON.parse(localStorage.getItem("toStudyTask"))
    : [];
const urgentTask =
  localStorage.getItem("urgentTask") !== null
    ? JSON.parse(localStorage.getItem("urgentTask"))
    : [];

const importantTask =
  localStorage.getItem("importantTask") !== null
    ? JSON.parse(localStorage.getItem("importantTask"))
    : [];

const laterTask =
  localStorage.getItem("laterTask") !== null
    ? JSON.parse(localStorage.getItem("laterTask"))
    : [];

const completedTask =
  localStorage.getItem("completedTask") !== null
    ? JSON.parse(localStorage.getItem("completedTask"))
    : [];

export const todoSlice = createSlice({
  name: "todoapp",
  initialState: {
    toStudyTask: toStudyTask,
    urgentTask: urgentTask,
    importantTask: importantTask,
    laterTask: laterTask,
    completedTask: completedTask,
    searchInputValue: "",
  },
  reducers: {
    // add todo task
    addTodoTask: (state, action) => {
      state.toStudyTask = [action.payload, ...state.toStudyTask];
      localStorage.setItem("toStudyTask", JSON.stringify(state.toStudyTask));

      localStorage.setItem("urgentTask", JSON.stringify(state.urgentTask));

      localStorage.setItem(
        "importantTask",
        JSON.stringify(state.importantTask)
      );

      localStorage.setItem("laterTask", JSON.stringify(state.laterTask));

      localStorage.setItem(
        "completedTask",
        JSON.stringify(state.completedTask)
      );
    },

    // remove todo task
    removeTodoTask: (state, action) => {
      const { id, colums } = action.payload;
      const index = state[colums].findIndex((todo) => todo.id === id);
      state[colums].splice(index, 1);

      localStorage.setItem("toStudyTask", JSON.stringify(state.toStudyTask));

      localStorage.setItem("urgentTask", JSON.stringify(state.urgentTask));

      localStorage.setItem(
        "importantTask",
        JSON.stringify(state.importantTask)
      );

      localStorage.setItem("laterTask", JSON.stringify(state.laterTask));

      localStorage.setItem(
        "completedTask",
        JSON.stringify(state.completedTask)
      );
    },

    // complete todo task
    completedTodoTask: (state, action) => {
      const { id, completed, colums } = action.payload;
      const index = state[colums].findIndex((todo) => todo.id === id);
      state[colums][index].completed = !completed;

      localStorage.setItem("toStudyTask", JSON.stringify(state.toStudyTask));

      localStorage.setItem("urgentTask", JSON.stringify(state.urgentTask));

      localStorage.setItem(
        "importantTask",
        JSON.stringify(state.importantTask)
      );

      localStorage.setItem("laterTask", JSON.stringify(state.laterTask));

      localStorage.setItem(
        "completedTask",
        JSON.stringify(state.completedTask)
      );
    },

    // edit todo task
    editingTodoTask: (state, action) => {
      const { value, task } = action.payload;
      const { colums } = task;
      const index = state[colums].findIndex((todo) => todo.id === task.id);
      state[colums][index].text = value;

      localStorage.setItem("toStudyTask", JSON.stringify(state.toStudyTask));

      localStorage.setItem("urgentTask", JSON.stringify(state.urgentTask));

      localStorage.setItem(
        "importantTask",
        JSON.stringify(state.importantTask)
      );

      localStorage.setItem("laterTask", JSON.stringify(state.laterTask));

      localStorage.setItem(
        "completedTask",
        JSON.stringify(state.completedTask)
      );
    },

    // filter task
    filterSearchValue: (state, action) => {
      state.searchInputValue = action.payload;
    },
    todoDrag: (state, action) => {
      const result = action.payload;
      if (!result.destination) return;
      const { source, destination } = result;
      if (source.droppableId !== destination.droppableId) {
        let sourceColumn = state[source.droppableId];
        let destColumn = state[destination.droppableId];
        const sourceItems = [...sourceColumn];
        const destItems = [...destColumn];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        state[source.droppableId] = sourceItems;
        state[destination.droppableId] = destItems;
        state[destination.droppableId][0].colums = destination.droppableId;
      } else {
        const column = state[source.droppableId];
        const copiedItems = [...column];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        state[source.droppableId] = copiedItems;
      }

      localStorage.setItem("toStudyTask", JSON.stringify(state.toStudyTask));

      localStorage.setItem("urgentTask", JSON.stringify(state.urgentTask));

      localStorage.setItem(
        "importantTask",
        JSON.stringify(state.importantTask)
      );

      localStorage.setItem("laterTask", JSON.stringify(state.laterTask));

      localStorage.setItem(
        "completedTask",
        JSON.stringify(state.completedTask)
      );
    },
  },
});

export const {
  addTodoTask,
  removeTodoTask,
  completedTodoTask,
  editingTodoTask,
  filterSearchValue,
  todoDrag,
} = todoSlice.actions;

export default todoSlice.reducer;
