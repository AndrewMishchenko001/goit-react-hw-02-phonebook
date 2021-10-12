import PropTypes from "prop-types";

export default function ContactList({ contacts, onDeleteContacts }) {
  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name} : {number}
            </p>
            <button type="button" onClick={() => onDeleteContacts(id)}></button>
          </li>
        ))}
      </ul>
    </>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContacts: PropTypes.func.isRequired,
};
