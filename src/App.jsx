import { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import "./App.css";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

export default function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState("");

  const addContact = ({ name, number }) => {
    const exists = contacts.some(
      (c) => c.name.toLowerCase() === name.toLowerCase()
    );
    if (exists) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const newContact = {
      id: crypto.randomUUID(),
      name,
      number,
    };
    setContacts((prev) => [...prev, newContact]);
  };

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="app">
      <div className="card form-card">
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact} />
      </div>

      <div className="card list-card">
        <h2>Contacts</h2>
        <Filter value={filter} onChange={setFilter} />
        <ContactList contacts={filteredContacts} onDelete={deleteContact} />
      </div>
    </div>
  );
}