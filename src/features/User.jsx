//represent our user reducer and slice
import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {name: "", age: 0, email: ""};

export const userSlice = createSlice({ //contains info about the reducer, state actions and the stateName
    name: "user", //stateName
    initialState: {value: initialStateValue}, //empty userObj
    reducers: {//reducer functions to alter the Apps values: Login func
        //changing the state value- with the ones coming from the payload(newValues)
        login: (state, action) => { //state:tracks the currentState "@initialState", actions 'func':has payload(obj that contains the info that u want to use when changing the state 'newValues )
            state.value = action.payload;
        },
        logout: (state) =>{ //clears out the object to its original state
            state.value = initialStateValue;
        }
    },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;

