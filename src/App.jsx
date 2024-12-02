import { useState, useEffect } from "react";
import "./App.css";

// components
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";

function App() {
  const dispatch = useDispatch()
  const { loading, error } = useSelector((state) => state.contacts)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])


  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm/>
      <SearchBox />
      {loading && !error && <h2>Loading contacts...</h2>}
      {error && <h2>{error}</h2>}
      {!loading && !error && <ContactList />}
    </div>
  );
}

export default App;
