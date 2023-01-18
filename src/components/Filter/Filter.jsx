// import PropTypes from 'prop-types';

import { nanoid } from "nanoid";

export const Filter = ({ onChange, value }) => {
  const idInput = nanoid();
  return (
    <>
      <label htmlFor="idInput">Find contacts by name</label>
      <input type="text" onChange={onChange} value={value} id={idInput}></input>
    </>
  );
};
