import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/AddCommentForm';

const initialState: AddCommentFormSchema = {
  text: '',
  error: undefined
};

export const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    }
  }
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(asyncReducer.pending, (state) => {
  //       state.error = undefined;
  //       state.isLoading = true;
  //     })
  //     .addCase(asyncReducer.fulfilled, (state) => {
  //       state.isLoading = false;
  //     })
  //     .addCase(asyncReducer.rejected, (state, action: PayloadAction<string>) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     });
  // }
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
