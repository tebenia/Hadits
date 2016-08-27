import React from 'react';

const Hadits = (props) => (
  <div>
    <h3>Daftar Hadits:</h3>
    <ol>
      <li>{props.title}</li>
    </ol>
  </div>
);

Hadits.propTypes = {
  title: React.PropTypes.string
};

export default Hadits;
