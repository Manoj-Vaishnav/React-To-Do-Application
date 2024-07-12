import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  todos: [],
}

export const userSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodos: (state,action) => {
        const data={
            id:uuidv4(),
            todo:action.payload.todo,
            isFinished:action.payload.isFinished
        }
      state.todos.push(data);
    },
    deleteTodos:(state,action)=>{
        state.todos=state.todos.filter((value) => value.id != action.payload)
    },
    checkDone:(state,action)=>{
        for (let data of state.todos) {
            if (data.id == action.payload) {
                data.isFinished = !data.isFinished;
            }
        }
        state.todos= state.todos.map((value) => value);
    },
    addToLocalStorage:(state)=>{
      state.todos = JSON.parse(localStorage.getItem('items'));
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTodos,deleteTodos,checkDone,addToLocalStorage} = userSlice.actions

export default userSlice.reducer