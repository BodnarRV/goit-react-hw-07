import React from "react";
import './ContactList.css';
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="contacts-container">
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} id={contact.id} name={contact.name} number={contact.number} />
      ))}
    </div>
  );
}
