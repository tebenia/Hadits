import React, {Component} from 'react';
import {TextField} from 'material-ui';
import SearchList from '../containers/searchList';

class SearchHadits extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleInput : "",
      doSearch : false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event){
    let titleInput = event.target.value;
    const doSearch = false;

    if(!titleInput){
      titleInput = ""
    }

    this.setState({
      titleInput,
      doSearch
    });
  }

  handleSubmit(event){
    event.preventDefault();

    this.setState({
      doSearch:true
    });
  }

  renderSearchList(){
    if (this.state.doSearch ) {
      return <SearchList title={this.state.titleInput}/>
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            name="searchTitleInput"
						ref="searchTitle"
						hintText="Type Hadits you are looking for..."
            floatingLabelText="Search"
            value={this.state.titleInput}
            onChange={this.handleInputChange}
          />
        </form>
        {this.renderSearchList()}
      </div>
    );
  }
}

export default SearchHadits;
