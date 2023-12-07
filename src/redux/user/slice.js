import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    createUser: (state, action) => {
      return {
        ...state,
        user: {
          name: action.payload.name,
          email: action.payload.email,
        },
      };
    },
  },
});

export default userSlice.reducer;
