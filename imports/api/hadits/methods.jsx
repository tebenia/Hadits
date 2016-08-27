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
    if (!this.userId) {
      alert("Please Login First");
    }
    const hadits = {
      title,
      userId: this.userId
    };
    Hadits.insert(hadits);
  }
});

export const update = new ValidatedMethod({
  name: "hadits.update",
  validate: new SimpleSchema({
    haditsId: {
      type: String
    },
    title: {
      type: String
    }
  }).validator(),
  run({haditsId, title}){
    const hadits = Hadits.findOne(haditsId);

    if (!hadits) {
      alert("Error 404");
    }

    if (!hadits.editableByUser(this.userId)) {
      alert("Not Authorized");
    }

    Hadits.update(hadits, {$set:{
      title
    }});

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

    if (!hadits) {
      alert("Error 404");
    }

    if (!hadits.editableByUser(this.userId)) {
      alert("you can't remove this");
    }

    Hadits.remove(hadits);
  }
});
