import { configureStore } from '@reduxjs/toolkit'
import mainTaskSlice from './Slices/taskSlice'

export const store = configureStore({
    reducer: {
        mainTask: mainTaskSlice,
    },
})
