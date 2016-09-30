import React, {Component, PropTypes} from 'react';
import {remove} from '/imports/api/hadits/methods';
import {Link} from 'react-router';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

const styles = {
  card: {
    minHeight: 200
  }
};

class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDeleteClick(event){
    remove.call({haditsId:this.props.hadits._id});
  }

  render() {
    return (
      <div className="six columns">
        <Card style={styles.card}>
          <CardHeader
            title={this.props.hadits.title}
            subtitle="Subtitle"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardActions>
            <button className="button" onClick={this.handleDeleteClick}>Delete</button>
            <Link className="button" to={`/hadits/${this.props.hadits._id}`}>Edit</Link>
          </CardActions>
          <CardText expandable={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
        </Card>
      </div>
    );
  }
}

SearchResult.propTypes = {
  hadits: PropTypes.object
};

export default SearchResult;
