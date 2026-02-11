const mongoose = require("mongoose");
const Listing = require("./models/listing");
const { data: sampleListings } = require("./init/data");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
  console.log("MongoDB connected");
}

async function initDB() {
  await Listing.deleteMany({}); // purana data delete
  await Listing.insertMany(sampleListings); // naya data insert
  console.log("New data added successfully");
}

main()
  .then(() => initDB())
  .catch((err) => console.log(err));