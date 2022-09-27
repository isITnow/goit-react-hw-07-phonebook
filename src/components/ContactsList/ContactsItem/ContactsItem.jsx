import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/operations';
import PropTypes from 'prop-types';
import s from './ContactsItem.module.css';

export const ContactsItem = ({ name, phone, id }) => {
    const dispatch = useDispatch();

    return (
        <li className={s.contact__item}>
            <span>{name}</span>
            <span className={s.phone}>{phone}</span>
            <button
                className={s.btn}
                type="button"
                onClick={() => dispatch(deleteContactThunk(id))}
            >
                Delete
            </button>
        </li>
    );
};

ContactsItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};
