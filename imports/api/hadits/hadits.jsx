import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

export const Hadits = new Mongo.Collection("hadits");
Hadits.allow({
  insert: function(){
    return false;
  },
  update: function(){
    return false;
  },
  remove: function(){
    return false;
  }
});

Hadits.deny({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});

Hadits.schema = new SimpleSchema({
  title:{
    type: String,
    label: "Title"
  },
  userId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  createdAt: {
    type: Date,
    label: "Date submitted",
    denyUpdate: true,
    autoValue(){
      if (this.isInsert) {
        return new Date();
      } else if(this.isUpsert){
        return {
          $setOnInsert: new Date()
        };
      }
      this.unset();
    }
  }
});

Hadits.helpers({
  editableByUser(userId){
    return this.userId === userId;
  }
});

Hadits.attachSchema(Hadits.schema);
