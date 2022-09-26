import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from './Form';
import ContactsList from './ContactsList';
import Filter from './Filter';
import Container from './Container';

export const App = () => {
    return (
        <Container>
            <h1>Phonebook</h1>
            <Form />
            <h2 className="contacts__title">Contacts</h2>
            <Filter />
            <ContactsList />
            <ToastContainer />
        </Container>
    );
};
