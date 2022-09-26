import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from 'services/contactsAPI';

export const fetchContactsThunk = createAsyncThunk(
    'contacts/get',
    async (_, { rejectWithValue }) => {
        try {
            return await API.getContacts();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addContactThunk = createAsyncThunk(
    'contacts/add',
    async contact => {
        const result = await API.addContact(contact);
        return result;
    }
);

export const deleteContactThunk = createAsyncThunk(
    'contacts/delete',
    async (id, { dispatch }) => {
        await API.deleteContact(id);
        dispatch(fetchContactsThunk());
    }
);
