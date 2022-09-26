import { createSlice } from '@reduxjs/toolkit';
import {
    fetchContactsThunk,
    addContactThunk,
    deleteContactThunk,
} from 'redux/operations';

const initContacts = {
    contacts: [],
    isLoading: false,
    error: '',
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initContacts,
    extraReducers: {
        [fetchContactsThunk.pending]: state => {
            state.isLoading = true;
            state.error = '';
        },

        [fetchContactsThunk.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.contacts = payload;
        },
        [fetchContactsThunk.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        },

        [addContactThunk.pending]: state => {
            state.isLoading = true;
            state.error = '';
        },

        [addContactThunk.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.contacts.unshift(payload);
        },
        [addContactThunk.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        },

        [deleteContactThunk.pending]: state => {
            state.isLoading = true;
            state.error = '';
        },

        [deleteContactThunk.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.contacts.filter(contact => contact.id !== payload);
        },
        [deleteContactThunk.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        },
    },
});
