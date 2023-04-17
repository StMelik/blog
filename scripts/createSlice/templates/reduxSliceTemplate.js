const firstCharUpperCase = require('../firstCharUpperCase');

module.exports = (sliceName) => {
  const typeName = `${firstCharUpperCase(sliceName)}Schema`;

  return `import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ${typeName} from '../types/${sliceName}Schema';
  
const initialState: ${typeName} = {
  isLoading: false,
  error: undefined,
  data: undefined
};

export const ${sliceName}Slice = createSlice({
  name: '${sliceName}',
  initialState,
  reducers: {
    reducerName: (state, action: PayloadAction<string>) => {
      state.??? = action.payload;
    }
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(???.pending, (state) => {
  //       state.error = undefined;
  //       state.isLoading = true;
  //     })
  //     .addCase(???.fulfilled, (state, action: PayloadAction<???>) => {
  //       state.isLoading = false;
  //       state.data = action.payload;
  //     })
  //     .addCase(???.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     });
  // }
});

export const { actions: ${sliceName}Actions } = ${sliceName}Slice;
export const { reducer: ${sliceName}Reducer } = ${sliceName}Slice;
`;
};
