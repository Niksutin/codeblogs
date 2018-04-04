import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchPost: props.searchPost,
            searchText: ""
        };
        this.search = this.search.bind(this);
    }

    search() {
        this.state.searchPost(this.state.searchText);
    }

    handleChange(e) {
        this.setState({searchText: e.target.value})
    }

    render() {
        return (
            <div>
            <form onSubmit={e => e.preventDefault()}>
                <input type="text" placeholder="Search..." onChange={this.handleChange.bind(this)}/>
                <button type="submit" onClick={this.search}>-O</button>
            </form>
            </div>
        )
    }
}