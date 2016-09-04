import {Meteor} from 'meteor/meteor';
import {composeWithTracker} from 'react-komposer';
import Hadits from '/imports/api/hadits/hadits';
import AddHadits from '../components/addHadits';

const composer = (props, onData) => {
  if (Meteor.subscribe("hadits", props.params.id).ready()) {
    const hadits = Hadits.findOne(props.params.id);

    onData(null, {hadits});
  }
};

export default composeWithTracker(composer)(AddHadits);
