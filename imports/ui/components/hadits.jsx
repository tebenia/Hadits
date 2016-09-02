import React, {Component, PropTypes} from 'react';
import {remove} from '/imports/api/hadits/methods';
import {Link} from 'react-router';

class Hadits extends Component {
  constructor(props) {
    super(props);

    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDeleteClick(event){
    remove.call({haditsId:this.props._id});
  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <button onClick={this.handleDeleteClick}>Delete</button>
        <Link className="button" to={`/hadits/${this.props._id}`}>Edit</Link>
      </div>
    );
  }
}

Hadits.propTypes = {
  title: PropTypes.string
};

export default Hadits;
