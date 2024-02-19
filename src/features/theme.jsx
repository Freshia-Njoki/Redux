import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = ""; //a string to rep the color

export const themeSlice = createSlice({ //contains info about the reducer, state actions and the stateName
    name: "theme", //stateName
    initialState: {value: initialStateValue},
    reducers: {
        changeColor: (state, action) => {
            state.value = action.payload
        }
        
    },
});

export const { changeColor } = themeSlice.actions;

export default themeSlice.reducer;

