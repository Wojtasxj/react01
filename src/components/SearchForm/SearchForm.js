import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './SearchForm.module.scss';
import TextInput from './../TextInput/TextInput';
import Button from './../Button/Buttonx';

const updateSearchString = (searchString) => ({
    type: 'UPDATE_SEARCHSTRING',
    payload: searchString
  });

const SearchForm = () => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        dispatch(updateSearchString(searchValue));
    };

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <form className={styles.searchForm} onSubmit={handleFormSubmit}>
            <TextInput
                placeholder="Search..."
                value={searchValue}
                onChange={handleInputChange}
            />
            <Button type="submit">
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;