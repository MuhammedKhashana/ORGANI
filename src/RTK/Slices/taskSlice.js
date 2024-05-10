import { createSlice } from '@reduxjs/toolkit'
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const mainTaskSlice = createSlice({
    name: 'mainTask',
    initialState: [
        {
            id: 1,
            data: {
                title: "task title",
                desc: "task desc",
                priority: "Normal",
                isCompleted: true,
                date: "2024, 6, 26"
            }
        }
    ],
    reducers: {
        addTask: (state, { title, desc, priority, date }) => {
            const newTask =
            {
                id: state.length + 1,
                data: {
                    title: title,
                    desc: desc,
                    priority: priority,
                    // date: new Date(date)
                    date: date
                }
            }
            state.push(newTask);
            return state;
        },
        isCompleted: (state, id) => {
            state.map((task) => {
                if (task.id === id) {
                    if (state[id].data.isCompleted) {
                        state[id].data.isCompleted = false;
                    } else {
                        state[id].data.isCompleted = true;
                    }
                }
            })
        },
        editTask: (state, action, { id, newTitle, newDesc, newPriority, newDate }) => {
            state.map((task) => {
                if (task.id === id) {
                    state[id].data.title = newTitle;
                    state[id].data.desc = newDesc;
                    state[id].data.priority = newPriority;
                    state[id].data.date = newDate;
                }
            })
        }
    }
})


// Action creators are generated for each case reducer function
// export const { addTask, editTask, isCompleted } = mainTaskSlice.actions

export default mainTaskSlice.reducer