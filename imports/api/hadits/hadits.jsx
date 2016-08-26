import Mongo from 'meteor/mongo';

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

const HaditsSchema = new SimpleSchema({
  title:{
    type: String,
    label: "Title"
  },
  createdAt: {
    type: Date,
    label: "Date submitted",
    autoValue(){
      return new Date();
    }
  }
});
