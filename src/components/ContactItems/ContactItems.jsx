// import PropTypes from 'prop-types';


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



// ContactItems.propTypes = {
//   items: PropTypes.exact({
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.number.isRequired,
//     // onDelete: PropType.fun.isRequired,
//   }).isRequired,
// };
