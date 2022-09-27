// import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;

// export const selectFilteredContacts = createSelector(
//     [selectFilter, selectContacts],
//     (search, contacts) => {
//         const normalizedSearch = search.toLowerCase();
//         return contacts.filter(({ name }) =>
//             name.toLowerCase().includes(normalizedSearch)
//         );
//     }
// );
