const mongoose = require("mongoose");

const { Array, ObjectId, String, Number } = mongoose.Schema.Types;

const VenuesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subName:{
    type:String
  },
  price: {
    type: Number,
    required: true
  },
  location:{
     type: Array, 
    required: true,
  },
  type: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  banner:{
    type:String
  },
  pictures: {
    type: Array,
    required: true
  },
  instructions:{
    type:Object,
    required:true
  },
  video: {
    type: Array, 
    required: true
  },
  storageLife:{
    type:String,
  },
  serves: {
    type: Number,
    default:1
  },
  description: {
    type: String,
    required: true
  },
  additionalInformation: {
    type: String,
  },
  tags: [{
    type: ObjectId,
    ref: "Tags"
  }]
});

const Venues = mongoose.models.Venues || mongoose.model("Venues", VenuesSchema);

module.exports = Venues;
