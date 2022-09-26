import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'contacts',
    initialState: '',
    reducers: {
        filterChange(state, action) {
            state.filter = action.payload;
        },
    },
});

export const { filterChange } = filterSlice.actions;
