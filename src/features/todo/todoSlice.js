import { createSlice, nanoid } from "@reduxjs/toolkit"; //nano id ko kaam bhaneko unique id dine ho

const initialState = {
    todos: [{ id: 1, text: "Hello World" }]
}

export const todoSlice = createSlice({
    name: "Todo",
    initialState,
    reducers: { //reducers ma auxa properties and functions
        addTodo: (state, action) => { // state ma current state present hunxa , and action ma chai data haru present hunxa
            const todo = { // initial state ma object xa so add todo garda pani object nai pass garnu paryo
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo) // to update the previous state hamro new todo object push garnu parxa
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id != action.payload)
        },
    }
}

)

export const { addTodo, removeTodo } = todoSlice.actions // REDUCERS HARU PANI INDIVIDUALLY EXPORT GARNE SO THAT ARU COMPONENTS MA USE GARNA MILXA

export default todoSlice.reducer // WE HAVE TO EXPORT THE REDUCERS SO THAT THE STORE CAN UPDATE THE STATES . STORE NEEDS THE LIST OF ALL REDUCERS AVAILABLE

