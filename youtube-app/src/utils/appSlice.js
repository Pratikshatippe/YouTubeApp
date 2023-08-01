import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
        searchData:"",
    },
    reducers:{
        toggleMenu: (state)=>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu:(state)=>{
            state.isMenuOpen = false;
        },
        saveSearchData:(state,action)=>{
            state.searchData = action.payload;
        }
    }
});

export const {toggleMenu, closeMenu, saveSearchData} = appSlice.actions;
export default appSlice.reducer;