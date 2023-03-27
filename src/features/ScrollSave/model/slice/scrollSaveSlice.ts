import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSaveSchema } from '../types/ScrollSaveSchema';

const initialState: ScrollSaveSchema = {
  scroll: {}
};

export const scrollSaveSlice = createSlice({
  name: 'scrollSave',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{path: string, position: number}>) => {
      state.scroll[payload.path] = payload.position;
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

export const { actions: scrollSaveActions } = scrollSaveSlice;
export const { reducer: scrollSaveReducer } = scrollSaveSlice;
