import React from "react";
//import AwesomeDebouncePromise from 'awesome-debounce-promise';
import PropTypes from "prop-types";

//import countryAPI from '../../../api/country';

class SearchInput extends React.Component {

  static propTypes = {
    searchResults : PropTypes.array,
    userInput: PropTypes.any
  }
  static defaultProps = {
    searchResults: [],
    userInput: ''
  };

  constructor() {
    super();
    //this.searchAPIDebounced = AwesomeDebouncePromise(countryAPI, 500);
    // this.state = {
    //   userInput: '',
    //   activeSuggestion: 0,
    //   showSuggestions: false
    // };
    this.handleTextChange = this.handleTextChange.bind(this);
  }


  handleTextChange = async userInput => {
    // this.setState({
    //   activeSuggestion: 0,
    //   showSuggestions: true,
    //   userInput,
    //   searchResults: [],
    // });
    // if (userInput === '')
    //   return;

    this.props.onUserInputChange(userInput);

    // const results = await searchAPIDebounced(userInput);
    // results.json().then(r => this.setState({ searchResults: r }));
  };

  onClick = e => {
    const index = this.props.searchResults.map(e => e.name).indexOf(e.currentTarget.innerText);
    this.props.onSelectItemChange(index);
    // this.setState({
    //   activeSuggestion: index,
    //   searchResults: [],
    //   showSuggestions: false,
    //   userInput: this.state.searchResults[index]
    // });
  };

  onKeyDown = e => {
    this.props.onKeyDownChange(e);
    // const { activeSuggestion, searchResults } = this.state;
    // // User pressed the enter key
    // if (e.keyCode === 13) {
    //   this.setState({
    //     activeSuggestion: 0,
    //     showSuggestions: false,
    //     userInput: searchResults[activeSuggestion]
    //   });
    // }
    // // User pressed the up arrow
    // else if (e.keyCode === 38) {
    //   if (activeSuggestion === 0) {
    //     return;
    //   }

    //   this.setState({ activeSuggestion: activeSuggestion - 1 });
    // }
    // // User pressed the down arrow
    // else if (e.keyCode === 40) {
    //   if (activeSuggestion - 1 === searchResults.length) {
    //     return;
    //   }

    //   this.setState({ activeSuggestion: activeSuggestion + 1 });
    // }
  };

  render() {
    // let suggestionsListComponent;
    // if (this.state.showSuggestions && this.state.userInput) {
    //   if (this.state.searchResults != null && this.state.searchResults.length > 0) {
    //     suggestionsListComponent = (
    //       <ul className="list-group overflow-auto">
    //         {this.state.searchResults.map((suggestion, index) => {
    //           let className = 'list-group-item';
    //           //Flag the active suggestion with a class
    //           if (index === this.state.activeSuggestion) {
    //             className = "list-group-item active";
    //           }
    //           return (
    //             <li className={className} key={suggestion.alpha2Code} onClick={this.onClick}>
    //               {suggestion.name}
    //             </li>
    //           );
    //         })}
    //       </ul>
    //     );
    //   } else {
    //     suggestionsListComponent = (
    //       <ul className="list-group">
    //         <li className="list-group-item list-group-item-danger">
    //           No suggestions available, please refine your search inputs!
    //               </li>
    //       </ul>
    //     );
    //   }
    // }

    return (
        <div className="form-label-group">
          <input type="text"
            id="countryName"
            className="form-control"
            placeholder="Type country name ..."
            onChange={e => this.handleTextChange(e.target.value)}
            onKeyDown={this.onKeyDown}
            value={(this.props.userInput) ? this.props.userInput.name : ''}
            required
            autoFocus></input>
          <label htmlFor="countryName">Country Name</label>
          {/* {suggestionsListComponent} */}
        </div>
    );
  }
}

export default SearchInput;