import { createSlice } from '@reduxjs/toolkit';

// const fetchUserInfo = createAsyncThunk('');

const initialState = {
  authStatus: false,
  userData: [],
  status: 'rejected',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.authStatus = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
  //   extraReducers: {},
});

export const { setAuth, setUserData } = authSlice.actions;
export default authSlice.reducer;
