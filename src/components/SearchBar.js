import React from "react";

class SearchBar extends React.Component {
  // constructor() {
  //   super();
  //   this.state = { term: '' };
  //   this.onFormSubmit = this.onFormSubmit.bind(this);
  // }
  state = { term: '' };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term)
  }
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="feild">
            <label htmlFor="image">Image Search</label> 
          <input name="image" type="text" value={this.state.term} onChange={(e) => this.setState({term: e.target.value})}/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
