import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term.toLowerCase());
  }

  render() {
    return (
      <div className='search-bar'>
        <input placeholder='Search...' value={this.state.term} onChange={event => this.onInputChange(event.target.value)}/>
        <button type="submit"><i className="material-icons">search</i></button>
      </div>
    );
  }
}

export default SearchBar;