import {Meteor} from 'meteor/meteor';
import Hadits from '../hadits';
import {check} from 'meteor/check';

Meteor.publish("hadits", function hadits(){
  return Hadits.find();
});

Meteor.publish("searchHadits", function hadits(title){
  check(title, String);
	const query = {};
	if (title) {
		query.title = {$regex:title, $options:"i"};
	}
	return Hadits.find(query);
});
