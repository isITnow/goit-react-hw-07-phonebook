import { combineReducers } from '@reduxjs/toolkit';
import { contactsSlice } from './contacts-slice';
import { filterSlice } from './filter-slice';

export const rootReducer = combineReducers({
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
});
