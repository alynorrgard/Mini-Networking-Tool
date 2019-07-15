import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      keywords: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleChange(event) {
    await this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    try {
      const searchQuery = this.state.keywords.replace(' ', '%');
      const searchResults = await axios.get(`/api/search/${searchQuery}`);
      console.log('SEARCH RESULTS!!!!', searchResults);
    } catch (err) {
      console.error('ERROR creating new contact:', err);
    }
  }

  render() {
    return (
      <div>
        <main>
          <h1>Search placeholder</h1>
        </main>
        <form id="search-form" onSubmit={this.handleSubmit}>
          <label htmlFor="keywords">
            Search Contacts:
            {!this.state.keywords && (
              <span className="warning">*Required Field</span>
            )}
          </label>
          <input
            name="keywords"
            type="text"
            onChange={this.handleChange}
            value={this.state.keywords}
          />

          <button
            type="submit"
            className="search"
            disabled={!this.state.keywords}
          >
            SEARCH
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
