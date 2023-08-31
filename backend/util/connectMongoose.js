import mongoose from "mongoose";

async function connectMongoose() {
    // Einstellungen, um mit Atlas mongoDB zu verbinden
  const pwd = process.env.MONGO_DB_PWD;
  const database = "Shopping";
  const user= process.env.MONGO_DB_USER
  const cluster = "final.ife5hty.mongodb.net";

  const uri = `mongodb+srv://${user}:${pwd}@${cluster}/${database}?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(uri);
    // Zeigt collections der DAtenbank (also _database) an
    const collections =  (await mongoose.connection.db.listCollections().toArray()).map(el => el.name);
    console.log(`collections of '${database}' db`, collections );
    return true;
  } catch (error) {
    console.error('Could not connect to mongoose', error);
    return false;
  }
}

export { connectMongoose }