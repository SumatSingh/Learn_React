import PropTypes from "prop-types";

const UseStates = (props) => {
  return (
    <>
      <div className="card p-3 my-2 text-center">
        <h1>{props.id}</h1>
        <h2>{props.title}</h2>
        <h3>{props.category}</h3>
        <p>{props.ram}</p>
        <p>{props.rom}</p>
      </div>
    </>
  );
};

// Step 2: Define PropTypes for Your Component
UseStates.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  ram: PropTypes.string.isRequired,
  rom: PropTypes.string.isRequired,
};

export default UseStates;
