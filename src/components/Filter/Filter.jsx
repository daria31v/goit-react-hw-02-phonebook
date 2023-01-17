

export const Filter = ({ onChange, value }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" onChange={onChange} value={value}></input>
    </>
  );
};
