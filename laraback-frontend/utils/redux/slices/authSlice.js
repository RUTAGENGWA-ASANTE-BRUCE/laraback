import { createSlice } from '@reduxjs/toolkit'



const initialState= {
  userData: {},
}

export const authSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setUserData:(state,action)=>{
        state.value =action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUserData } = authSlice.actions
export const selectUserData = state => state.session.userData;


export default authSlice.reducer