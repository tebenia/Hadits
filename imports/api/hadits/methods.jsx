import {Meteor} from 'meteor/meteor';
import {ValidatedMethod} from 'meteor/mdg:validated-method';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {Hadits} from './hadits';


export const insert  = new ValidatedMethod({
  name: "hadits.insert",
  validate: new SimpleSchema({
    title: {
      type: String
    }
  }).validator(),
  run({title}){
    const hadits = {
      title
    };
    Hadits.insert(hadits);
  }
});

export const remove  = new ValidatedMethod({
  name: "hadits.remove",
  validate: new SimpleSchema({
    haditsId: {
      type: String
    }
  }).validator(),
  run({haditsId}){
    const hadits = Hadits.findOne(haditsId);
    if (!hadits.editableByUser(this.userId)) {
      alert("you can't remove this");
    }

    Hadits.remove(hadits);
  }
});
