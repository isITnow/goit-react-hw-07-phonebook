import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers/reducer';

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === 'development',
    // middleware: getDefaultMiddleware =>
    //     getDefaultMiddleware({
    //         serializableCheck: {
    //             ignoredActions: [
    //                 FLUSH,
    //                 REHYDRATE,
    //                 PAUSE,
    //                 PERSIST,
    //                 PURGE,
    //                 REGISTER,
    //             ],
    //         },
    //     }),
});
