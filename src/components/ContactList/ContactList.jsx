import React from 'react';
import Contact from '../Contact';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'services/contactsApi';

const ContactList = () => {
  const { data = [], error } = useGetContactsQuery();
  const filterData = useSelector(state => state.filter);

  const contacts =
    filterData.value !== ''
      ? data.filter(({ name }) =>
          name
            .toString()
            .toLowerCase()
            .includes(filterData.toString().toLowerCase())
        )
      : [...data];

  return (
    <>
      {error && <h2>Ops, something was wrong...</h2>}

      <ul className={s.listContainer}>
        {contacts.map(({ name, number, id }) => (
          <Contact key={id} name={name} number={number} id={id} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
