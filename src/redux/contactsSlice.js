import { createSlice } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, fetchContacts } from './operations';
import { selectFilter } from './selectors';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },

  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  [addContacts.pending](state) {
    state.isLoading = true;
  },
  [addContacts.fulfilled](state, action) {
    state.isLoading = false;
    state.error = null;
    state.items.push(action.payload);
  },
  [addContacts.rejected](state, action) {
    state.isLoading = false;
    state.error = action.payload;
  },

  [deleteContacts.pending](state) {
    state.isLoading = true;
  },
  [deleteContacts.fulfilled](state, action) {
    state.isLoading = false;
    state.error = null;
    const index = state.items.findIndex(
      contact => contact.id === action.payload.id
    );
    state.items.splice(index, 1);
  },
  [deleteContacts.rejected](state, action) {
    state.isLoading = false;
    state.error = action.payload;
  },
  [selectFilter](state, action) {
    state.filter(action.payload);
  },
});

// export const filterSlice = createSlice({
//   name: 'filter',
//   initialState: '',
//   reducers: {
//     filterChange(state, action) {
//       return (state = action.payload);
//     },
//   },
// });

// export const { filterChange } = filterSlice.actions;
// export const filterReducer = filterSlice.reducer;
// export const contactsReducer = contactSlice.reducer;



export const { filterChange } = contactSlice.actions;
export const filterReducer = contactSlice.reducer;
export const contactsReducer = contactSlice.reducer;
