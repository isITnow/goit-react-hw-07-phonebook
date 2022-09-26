// import { addContact, deleteContact } from '../actions/action.contacts';
import { createSlice } from '@reduxjs/toolkit';

const initContacts = [
    // { id: 'id-1', name: 'Anakin Skywalker', number: '459-12-56' },
    // { id: 'id-2', name: 'Luke Skywalker', number: '443-89-12' },
    // { id: 'id-3', name: 'Leia Organa', number: '645-17-79' },
    // { id: 'id-4', name: 'Han Solo', number: '227-91-26' },
    // { id: 'id-5', name: 'Darth Sidious', number: '277-71-76' },
    // { id: 'id-6', name: 'Kyle Reese', number: '557-78-76' },
    // { id: 'id-7', name: 'Sarah Connor', number: '800-91-26' },
    // { id: 'id-8', name: 'John Connor', number: '100-09-92' },
];

// export const contactsReduser = createReducer(initContacts, {
//     [addContact]: (state, action) => [action.payload, ...state],
//     [deleteContact]: (state, action) =>
//         state.filter(({ id }) => id !== action.payload),
// });

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initContacts,
    reducers: {
        addContact: (state, action) => [action.payload, ...state],
        deleteContact: (state, action) =>
            state.filter(({ id }) => id !== action.payload),
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;
