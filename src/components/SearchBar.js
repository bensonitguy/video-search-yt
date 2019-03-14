import React from 'react';

class SearchBar extends React.Component {
    state = { term : 'Enter the values !!'};
    onInputChange = (event) => {
        this.setState({term: event.target.value});
    };

    render(){
        return (
            <div className="search-bar ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" 
                        value={this.state.term}
                        onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        );
    };
};

export default SearchBar;