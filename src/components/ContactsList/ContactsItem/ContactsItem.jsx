import s from './ContactsItem.module.css';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/actions/action.contacts';
import { useDispatch } from 'react-redux';

export const ContactsItem = ({ name, number, id }) => {
    const dispatch = useDispatch();
    return (
        <li className={s.contact__item}>
            <span>{name}:</span>
            <span>{number}</span>
            <button
                className={s.btn}
                type="button"
                onClick={() => dispatch(deleteContact(id))}
            >
                Delete
            </button>
        </li>
    );
};

ContactsItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};
