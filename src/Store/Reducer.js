import { addTodo, editTodo, rmTodo, toggleTodo } from "./actiontypes";

export const Reducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case addTodo: {
      return {
        ...state,
        todos: action.payload,
      };
    }

    case rmTodo: {
      return {
        ...state,
        todos: action.payload,
      };
    }

    case editTodo: {
      return {
        ...state,
        todos: action.payload,
      };
    }

    case toggleTodo: {
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
};
