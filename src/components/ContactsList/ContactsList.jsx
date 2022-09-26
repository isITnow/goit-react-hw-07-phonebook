import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { ContactsItem } from '././ContactsItem';
import { fetchContactsThunk } from 'redux/operations';
import { FallingLines } from 'react-loader-spinner';
import s from './ContactsList.module.css';

const ContactsList = () => {
    const isLoading = useSelector(state => state.contacts.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContactsThunk());
    }, [dispatch]);

    const { contacts } = useSelector(state => state.contacts);
    const { filter } = useSelector(state => state);

    const filteredContacts = useMemo(() => {
        const normalizedContacts = filter.toLowerCase();
        return contacts.filter(({ name }) =>
            name.toLowerCase().includes(normalizedContacts)
        );
    }, [contacts, filter]);

    if (isLoading) {
        return (
            <FallingLines
                color="#424242"
                width="100"
                visible={true}
                ariaLabel="falling-lines-loading"
            />
        );
    }

    if (!contacts.length) {
        return <p>List is empty</p>;
    }

    if (!filteredContacts.length) {
        return <p>User not found</p>;
    }

    return (
        <div>
            <ul className={s.contacts__list}>
                {filteredContacts.map(({ name, phone, id }) => {
                    return (
                        <ContactsItem
                            key={id}
                            name={name}
                            phone={phone}
                            id={id}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default ContactsList;
