import ContactItem from "./ContactItem";

export default function ContactList({ contacts, onDelete }) {
  if (contacts.length === 0) {
    return <p className="empty-msg">No contacts found.</p>;
  }

  return (
    <ul className="contact-list">
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
}