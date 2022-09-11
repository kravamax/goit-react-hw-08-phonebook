import { createSlice } from '@reduxjs/toolkit';

export const filter = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(_, { payload }) {
      return payload;
    },
  },
});

export const { changeFilter } = filter.actions;
export default filter.reducer;
