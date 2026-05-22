import { Component } from "react";

class ContactItem extends Component {
  handleDelete = () => {
    this.props.onDelete(this.props.contact.id);
  };

  render() {
    const { contact } = this.props;

    return (
      <li className="contact-item">
        <div className="contact-info">
          <span className="contact-name">{contact.name}</span>
          <span className="contact-number">{contact.number}</span>
        </div>
        <button
          className="btn-delete"
          onClick={this.handleDelete}
          aria-label={`Delete ${contact.name}`}
        >
          Delete
        </button>
      </li>
    );
  }
}

export default ContactItem;
