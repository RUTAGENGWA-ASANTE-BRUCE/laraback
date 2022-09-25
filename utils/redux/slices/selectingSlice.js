import { createSlice } from '@reduxjs/toolkit'



const initialState= {
    selectedObjectKeys:{},
    selectedFormData:{},
}

export const selectingSlice = createSlice({
  name: 'selecting',
  initialState,
  reducers: {
    setSelectedObjectKeys:(state,action)=>{
        state.selectedObjectKeys =action.payload
    },
    setSelectedFormData:(state,action)=>{
        state.selectedFormData =action.payload
    },
  },
})  

// Action creators are generated for each case reducer function
export const { setSelectedObjectKeys,setSelectedFormData } = selectingSlice.actions
export const selectSelectedObjectKeys = state => state.selecting.selectedObjectKeys;
export const selectSelectedFormData = state => state.selecting.selectedFormData;


export default selectingSlice.reducer