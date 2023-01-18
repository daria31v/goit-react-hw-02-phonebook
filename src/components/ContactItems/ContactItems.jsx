import PropTypes from 'prop-types';


export const ContactItems = ({ item: { id, name, number}, onDelete }) => {
  return (
    <>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </>
  );
};



ContactItems.propTypes = {
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number.isRequired,
}.isRequired
