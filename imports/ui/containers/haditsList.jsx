import {Meteor} from 'meteor/meteor';
import {composeWithTracker} from 'react-komposer';
import Hadits from '/imports/api/hadits/hadits';
import HaditsList from '../components/haditsList';

const composer = (props, onData) => {
  if (Meteor.subscribe("hadits").ready()) {
    const hadits = Hadits.find().fetch();
    onData(null, {hadits});
  }
};

export default composeWithTracker(composer)(HaditsList);
