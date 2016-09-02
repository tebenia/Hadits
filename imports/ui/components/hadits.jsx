import React from 'react';

const Hadits = (props) => (
  <div>
      <h4>{props.title}</h4>
  </div>
);

Hadits.propTypes = {
  title: React.PropTypes.string
};

export default Hadits;
