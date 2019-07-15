import React from 'react';
import { connect } from 'react-redux';
import { getResults, clearState } from '../reducers/index';
import SearchResults from './SearchResults';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      keywords: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearState();
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
      await this.props.getResults(searchQuery);
    } catch (err) {
      console.error('ERROR creating new contact:', err);
    }
  }

  render() {
    return (
      <div>
        {this.props.searchResults[0] ? (
          <SearchResults results={this.props.searchResults} />
        ) : (
          <div>
            <main>
              <h1>Search Contacts:</h1>
            </main>
            <form id="search-form" onSubmit={this.handleSubmit}>
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
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchResults: state.searchResults,
});

const mapDispatchToProps = dispatch => ({
  getResults: keywords => dispatch(getResults(keywords)),
  clearState: () => dispatch(clearState()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
