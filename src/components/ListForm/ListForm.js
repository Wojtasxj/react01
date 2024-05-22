import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from './../Button/Buttonx';
import { addList } from '../../redux/store';
import styles from './ListForm.module.scss';
import TextInput from '../TextInput/TextInput';

const ListForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setTitle('');
    setDescription('');
  };

  return (
    <form className={styles.listForm} onSubmit={handleSubmit}>
      <label>Title:</label>
      <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
      <label>Description:</label>
      <TextInput value={description} onChange={(e) => setDescription(e.target.value)} />
      <Button type="submit">Add list</Button>
    </form>
  );
};

export default ListForm;