import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'contacts',
    initialState: '',
    reducers: {
        filterChange: (state, action) => {
            return action.payload;
        },
    },
});

export const { filterChange } = filterSlice.actions;
