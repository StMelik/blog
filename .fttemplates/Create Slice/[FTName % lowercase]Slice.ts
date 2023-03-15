import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: Schema = {
  isLoading: false,
  error: undefined
};

export const <FTName % lowercase>Slice = createSlice({
  name: '[FTName % lowercase]',
  initialState,
  reducers: {
    reducerName: (state, action: PayloadAction<string>) => {
      state.??? = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(asyncReducer.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(asyncReducer.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(asyncReducer.rejected, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { actions: <FTName % lowercase>Actions } = <FTName % lowercase>Slice;
export const { reducer: <FTName % lowercase>Reducer } = <FTName % lowercase>Slice;
