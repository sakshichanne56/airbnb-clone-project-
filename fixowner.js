const mongoose = require("mongoose");
const Listing = require("./models/listing");
const User = require("./models/user");

mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");

async function fixOwner() {
  const user = await User.findOne({ username: "demo1" }); // choose owner

  await Listing.updateMany(
    { owner: { $exists: false } },
    { owner: user._id }
  );

  console.log("Owner fixed");
  mongoose.connection.close();
}

fixOwner();