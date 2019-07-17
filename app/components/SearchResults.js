import React from 'react';
import { Link } from 'react-router-dom';

const SearchResults = props => (
  <div id="search-results">
    <h1 className="header">Search Results:</h1>
    <div>
      {props.results.map(user => {
        return (
          <div key={user.id}>
            <Link to={`/contacts/${user.id}`}>
              <div className="result">{user.displayName}</div>
            </Link>
          </div>
        );
      })}
    </div>
  </div>
);

export default SearchResults;
