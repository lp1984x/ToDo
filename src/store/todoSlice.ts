import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Todo = {
  id: string;
  title: string;
  completed: boolean;
}

type TodosState = {
  list: Todo[];
}
const  value= localStorage.getItem("list")

const initialState: TodosState = {

    list:value ? JSON.parse(value) : []
  
}

const setItem = <T>(item:T)=>{
  localStorage.setItem("list", JSON.stringify(item))
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      
      state.list.push({
        id: new Date().toISOString(),
        title: action.payload,
        completed: false,
      })

      setItem(state.list)
    },
    toggleComplete(state, action: PayloadAction<string>) {
      const toggledTodo = state.list.find(todo => todo.id === action.payload);
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed;
      }
      setItem(state.list)
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.list = state.list.filter(todo => todo.id !== action.payload);
      setItem(state.list)
    }
  },
});

export const { addTodo, toggleComplete, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;