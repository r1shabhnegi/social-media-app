import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCurrentUser } from '../appwrite/api';

export const fetchAuth = createAsyncThunk('fetch/auth', async () => {
  try {
    const userData = await getCurrentUser();
    console.log(userData);
    return userData;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  authStatus: false,
  userData: {},
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
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuth.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAuth.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.userData = {
          name: payload.name,
          username: payload.username,
          email: payload.email,
          accountId: payload.accountId,
          bio: payload.bio,
          imageUrl: payload.imageUrl,
        };
        state.authStatus = !!payload;
      })
      .addCase(fetchAuth.rejected, (state) => {
        state.status = 'rejected';
      });
  },
});

export const { setAuth, setUserData, setStatus } = authSlice.actions;
export default authSlice.reducer;
