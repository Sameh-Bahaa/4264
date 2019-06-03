import React, { Fragment } from "react";
import AwesomeDebouncePromise from 'awesome-debounce-promise';

const searchAPI = userInput => fetch('https://restcountries-v1.p.rapidapi.com/name/' + encodeURIComponent(userInput), {
  headers: {
    "X-RapidAPI-Host": "restcountries-v1.p.rapidapi.com",
    "X-RapidAPI-Key": "ca5af657a4mshfb7d346f15f6cabp1cd280jsn51556ef34eb2"
  }
});

const searchAPIDebounced = AwesomeDebouncePromise(searchAPI, 500);

class SearchAPIComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      activeSuggestion: 0,
      showSuggestions: false,
      searchResults: [],
    };


    //this.handleTextChange = this.handleTextChange.bind(this);
  }


  handleTextChange = async userInput => {
    this.setState({
      activeSuggestion: 0,
      showSuggestions: true,
      userInput,
      searchResults: [],
    });
    if (userInput === '')
      return;

    const results = await searchAPIDebounced(userInput);
    results.json().then(r => this.setState({ searchResults: r }));
  };

  onClick = e => {
    const index = this.state.searchResults.map(e => e.name).indexOf(e.currentTarget.innerText);
    
    this.setState({
      activeSuggestion: index,
      searchResults: [],
      showSuggestions: false,
      userInput: this.state.searchResults[index]
    });
  };

  onKeyDown = e => {
    const { activeSuggestion, searchResults } = this.state;
    // User pressed the enter key
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: searchResults[activeSuggestion]
      });
    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === searchResults.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  componentWillUnmount() {
    this.setState = () => { };
  }

  render() {
    const {
      handleTextChange,
      onClick,
      onKeyDown,
      state: {
        showSuggestions,
        userInput,
        searchResults
      }
    } = this;

    let suggestionsListComponent;
    if (showSuggestions && userInput) {
      if (searchResults != null && searchResults.length > 0) {
        suggestionsListComponent = (
          <ul className="list-group overflow-auto">
            {searchResults.map((suggestion, index) => {
              let className = 'list-group-item';

              //Flag the active suggestion with a class
              if (index === this.state.activeSuggestion) {
                className = "list-group-item active";
              }

              return (
                <li className={className} key={suggestion.alpha2Code} onClick={onClick}>
                  {suggestion.name}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <ul className="list-group">
            <li className="list-group-item list-group-item-danger">
              No suggestions available, please refine your search inputs!
                  </li>
          </ul>
        );
      }
    }

    return (
      <Fragment>
        <div className="form-label-group">
          <input type="text"
            id="countryName"
            className="form-control"
            placeholder="Type country name ..."
            onChange={e => handleTextChange(e.target.value)}
            onKeyDown={onKeyDown}
            value={userInput.name}
            required
            autoFocus></input>
          <label htmlFor="countryName">Country Name</label>
          {suggestionsListComponent}
        </div>

      </Fragment>
    );
  }
}

export default SearchAPIComponent;