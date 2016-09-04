import React from 'react';
import Hadits from './hadits';

const HaditsList = (props) => (
  <div>
    {
      props.hadits.map(hadit =>
        <Hadits
          key={hadit._id}
          hadits={hadit}
        />
      )
    }
  </div>
);

HaditsList.propTypes = {
  hadits : React.PropTypes.array
};

export default HaditsList;
