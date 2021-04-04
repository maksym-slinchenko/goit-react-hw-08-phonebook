import React, { Component } from 'react';
import { connect } from 'react-redux';
import operations from '../../redux/contacts/contacts-operations';
import { getContacts } from '../../redux/contacts/contacts-selectors';

class ContactItem extends Component {
  onRemove;

  render() {
    const { id, name, number } = this.props;

    return (
      <>
        <li key={id} name={name}>
          {`${name}: ${number}`}
          <button
            type="button"
            onClick={() => {
              this.props.onRemove(id);
            }}
          >
            Delete
          </button>
        </li>
      </>
    );
  }
}
const mapStateToprops = state => ({ contacts: getContacts(state) });
const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(operations.removeContact(id)),
});
export default connect(mapStateToprops, mapDispatchToProps)(ContactItem);
