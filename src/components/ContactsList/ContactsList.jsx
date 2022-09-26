import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { ContactsItem } from '././ContactsItem';
import s from './ContactsList.module.css';

export const ContactsList = () => {
    const { contacts, filter } = useSelector(state => state);

    const filteredContacts = useMemo(() => {
        const normalizedContacts = filter.toLocaleLowerCase();
        return contacts.filter(({ name }) =>
            name.toLocaleLowerCase().includes(normalizedContacts)
        );
    }, [contacts, filter]);

    if (!filteredContacts.length) {
        return <p>User not found</p>;
    }

    return (
        <div>
            <ul className={s.contacts__list}>
                {filteredContacts.map(({ name, number, id }) => {
                    return (
                        <ContactsItem
                            key={id}
                            name={name}
                            number={number}
                            id={id}
                        />
                    );
                })}
            </ul>
        </div>
    );
};
