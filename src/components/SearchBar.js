import React from 'react';
import './SearchBar.css'

class SearchBar extends React.Component {
    state = { 
        term: '' 
    };

    onInputChange = (e) => {
        e.preventDefault();
        this.setState({ term: e.target.value });
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="ui search" style={{ "margin-top": "50px", "margin-bottom": "50px" }}>
                    <div className="search-item ui icon input">
                        <input className="prompt" 
                            text={this.state.term} 
                            placeholder="Pesquisar..." 
                            onChange={this.onInputChange} />
                        <i className="search icon"></i>
                    </div>
                    <div className="results"></div>
                </div>
            </form>
        )
    }
}

export default SearchBar