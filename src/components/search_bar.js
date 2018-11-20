import React from "react"; //  {Component} can be destructured, use only for class

// const SearchBar = () => { funcitonal component
class SearchBar extends React.Component {
  // return <input />; //<jsx> makes us need to import react
  constructor(props) {
    super(props);

    this.state = { term: "" };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  render() {
    //always in a class
    return (
      <React.Fragment>
        <input onChange={this.handleInputChange} />
        <p>{this.state.term}</p>
      </React.Fragment>
    );
    //on(React)Change(Vanilla browser event), produces and object, we can call it event or e
    //can also be written onChange={event=>console.log(event.target.value)}
  }

  handleInputChange(event) {
    this.setState({ term: event.target.value });
  }
}

export default SearchBar;
