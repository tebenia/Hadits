import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {insert} from '/imports/api/hadits/methods';
import {update} from '/imports/api/hadits/methods';

class AddHadits extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const haditsId = this.props.hadits._id;
    const title = ReactDOM.findDOMNode(this.refs.titleInput).value.trim();
    if (haditsId) {
      update.call({haditsId, title});
    } else {
      insert.call({title});
    }
    this.context.router.goBack();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="titleInput" placeholder="Judul Hadits" defaultValue={this.props.hadits.title}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

AddHadits.propTypes = {
  hadits: PropTypes.object
};

AddHadits.contextTypes = {
  router: PropTypes.object.isRequired
};

AddHadits.defaultProps = {
  hadits: {
    title: ""
  }
}

export default AddHadits;
