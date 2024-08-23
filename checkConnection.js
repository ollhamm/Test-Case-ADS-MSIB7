const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://lifehelper1733:SQ6wm47RLY7GEHjd@cluster0.oloda.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function checkConnection() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected successfully to MongoDB Atlas");
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
  } finally {
    await client.close();
  }
}

checkConnection();
