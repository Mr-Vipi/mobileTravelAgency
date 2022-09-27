import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../../services/authService";

// Get agent from AsyncStorage
// const getData = async () => {
//   try {
//     const jsonValue = await AsyncStorage.getItem("agent");
//     return jsonValue !== null ? jsonValue : null;
//   } catch (e) {
//     console.log("e", e);
//     // error reading value
//   }
// };

// console.log("getData", getData());

const initialState = {
  agent: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Register user
export const register = createAsyncThunk(
  "auth/register",
  async (agent, thunkAPI) => {
    try {
      return await authService.register(agent);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.agent = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.agent = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
