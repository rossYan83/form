export default function ContactItem({ contact, onDelete }) {
  return (
    <li className="contact-item">
      <div className="contact-info">
        <span className="contact-name">{contact.name}</span>
        <span className="contact-number">{contact.number}</span>
      </div>
      <button
        className="btn-delete"
        onClick={() => onDelete(contact.id)}
        aria-label={`Delete ${contact.name}`}
      >
        Delete
      </button>
    </li>
  );
}