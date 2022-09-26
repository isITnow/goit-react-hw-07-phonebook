import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://6331aa2fcff0e7bf70f393b3.mockapi.io/contacts',
    params: {},
});

const getContacts = async () => {
    const response = await instance.get('');
    return response.data;
};

const addContact = async data => {
    const response = await instance.post('', data);
    return response.data;
};

const deleteContact = async id => await instance.delete(`/${id}`);

export const API = {
    getContacts,
    addContact,
    deleteContact,
};
