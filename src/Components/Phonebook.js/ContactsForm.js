import { Component } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import ContactList from "../ContactList/ContactList";

export default class ContactsForm extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
  };

  formSubmitHandler = (data) => {
    if (
      this.state.contacts.some(
        ({ name }) => name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
    } else {
      data.id = uuidv4();
      this.setState(({ contacts }) => ({
        contacts: [data, ...contacts],
      }));
    }
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: "", number: "" });
  };

  deleteContacts = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.formSubmitHandler}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={name}
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            value={number}
            onChange={this.handleChange}
            required
          />
        </label>
        <button type="submit">Add contact</button>
        <ContactList contacts={this.state.contacts} />
      </form>
    );
  }
}

ContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
