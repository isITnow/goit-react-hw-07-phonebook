import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from 'services/contactsAPI';

export const fetchContactsThunk = createAsyncThunk(
    'contacts/get',
    async (_, { rejectWithValue }) => {
        try {
            return await API.getContacts();
        } catch (error) {
            console.log(error.message);
            return rejectWithValue(error.message);
        }
    }
);

export const addContactThunk = createAsyncThunk(
    'contacts/add',
    async (contact, { rejectWithValue }) => {
        try {
            const result = await API.addContact(contact);
            return result;
        } catch (error) {
            console.log(error.message);
            return rejectWithValue(error.message);
        }
    }
);

export const deleteContactThunk = createAsyncThunk(
    'contacts/delete',
    async (id, { dispatch, rejectWithValue }) => {
        try {
            await API.deleteContact(id);
            dispatch(fetchContactsThunk());
        } catch (error) {
            console.log(error.message);
            return rejectWithValue(error.message);
        }
    }
);
