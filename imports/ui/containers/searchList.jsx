import {Meteor} from 'meteor/meteor';
import {composeWithTracker} from 'react-komposer';
import Hadits from '/imports/api/hadits/hadits';
import SearchList from '../components/searchList';

const composer = (props, onData) => {
  if (Meteor.subscribe("searchHadits", props.title).ready()) {
    const results = Hadits.find().fetch();
    onData(null, {results});
  }
};

export default composeWithTracker(composer)(SearchList);
