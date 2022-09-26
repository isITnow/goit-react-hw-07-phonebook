import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import s from './Form.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addContactThunk } from 'redux/operations';

const Form = () => {
    const contacts = useSelector(state => state.contacts.contacts);
    const isLoading = useSelector(state => state.contacts.isLoading);
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleInputChange = evt => {
        const { name, value } = evt.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'phone':
                setPhone(value);
                break;

            default:
                break;
        }
    };

    const handleFormSubmit = evt => {
        evt.preventDefault();
        const nameToCheck = name.toLowerCase();
        const isIncludeName = contacts.some(
            contact => contact.name.toLowerCase() === nameToCheck
        );
        if (isIncludeName) {
            toast.warn(`${name} is already in contacts`, {
                autoClose: 2000,
            });
            return;
        }
        const profile = { id: nanoid(3), name, phone };
        dispatch(addContactThunk(profile));
        formReset();
    };

    const formReset = () => {
        setName('');
        setPhone('');
    };

    return (
        <div>
            <form className={s.form} onSubmit={handleFormSubmit}>
                <label className="form__name">
                    Name
                    <input
                        className={s.form__input}
                        value={name}
                        onChange={handleInputChange}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <label className="form__phone">
                    Number
                    <input
                        className={s.form__input}
                        value={phone}
                        onChange={handleInputChange}
                        type="tel"
                        name="phone"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <button
                    className={s.form__btn}
                    disabled={isLoading}
                    type="submit"
                >
                    Add contact
                </button>
            </form>
        </div>
    );
};

export default Form;
