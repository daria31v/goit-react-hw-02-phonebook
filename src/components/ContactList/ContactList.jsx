import PropTypes from 'prop-types';

import { ContactItems } from '../ContactItems/ContactItems';
import { Component } from 'react';

export class ContactList extends Component {
    state = {
      contacts:[],
  };

  render() {
    const { items, onDelete } = this.props;
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <ContactItems item={item} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    );
  }
}


ContactList.propTypes = {
  items: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired}.isRequired

