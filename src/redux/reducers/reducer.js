import { combineReducers } from '@reduxjs/toolkit';
import { contactsReduser } from './contacts-reduser';
import { filterSlice } from './filter-slice';

export const rootReducer = combineReducers({
    contacts: contactsReduser,
    filter: filterSlice.reducer,
});
