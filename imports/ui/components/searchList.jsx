import React from 'react';
import SearchResult from './searchResult';

const SearchList = (props) => (
  <div>
    {
      props.results.map(hadit =>
        <SearchResult
          key={hadit._id}
          hadits={hadit}
        />
      )
    }
  </div>
);

SearchList.propTypes = {
  results : React.PropTypes.array
};

export default SearchList;
