const mongoose = require("mongoose");
const { Schema } = mongoose;
const bloodbankSchema = new Schema({
  attributes: {
    type: {
        blood_bank_name: String,
        state: String,
        district: String,
        city: String,
        address: String,
        pincode: String,
        contact_no: String,
        mobile: String,
        email: String,
        website: String,
        category: String,
        service_time: String
      },
    require: true,
  },
  geometry: {
    type: {
        x: Number,
        y: Number
    },
    require: true,
  },
});

module.exports = mongoose.model("bloodbank", bloodbankSchema);
