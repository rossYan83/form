import { Component } from "react";
import ContactItem from "./ContactItem";

class ContactList extends Component {
  render() {
    const { contacts, onDelete } = this.props;

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
}

export default ContactList;
