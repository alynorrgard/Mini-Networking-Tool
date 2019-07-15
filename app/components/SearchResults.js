import React from 'react';
import { Link } from 'react-router-dom';

const SearchResults = props => (
  <div id="search-results">
    <h1>Search Results:</h1>
    <div id="results-rows">
      {props.results.map(user => {
        return (
          <div key={user.id}>
            <Link to={`/contacts/${user.id}`}>
              <h2>{user.displayName}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  </div>
);

export default SearchResults;
