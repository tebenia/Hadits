import {Meteor} from 'meteor/meteor';
import {Hadits} from '../hadits';

Meteor.publish("hadits", function hadits(){
  return Hadits.find();
});
