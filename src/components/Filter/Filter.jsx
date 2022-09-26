import { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './Filter.module.css';
import { filterChange } from 'redux/reducers/filter-slice';

const Filter = () => {
    const [filter, setFilter] = useState('');

    const dispatch = useDispatch();

    const handleFilterChange = evt => {
        const { value } = evt.currentTarget;
        dispatch(filterChange(value));
        setFilter(value);
    };

    return (
        <div>
            <label className={s.label}>
                Find contacts by name
                <input
                    className={s.input}
                    name="filter"
                    type="text"
                    value={filter}
                    onChange={handleFilterChange}
                />
            </label>
        </div>
    );
};

export default Filter;
