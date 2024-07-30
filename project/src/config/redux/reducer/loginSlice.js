import { createSlice } from '@reduxjs/toolkit'

const loginSlice = createSlice({
    name: 'Login',
    initialState: {
        dummyData: "testing"
    },
    reducers: {
        add() { },
        edit() { },
        delete() { },
    }
})

export const { add, del } = loginSlice.actions;
export default loginSlice.reducer;