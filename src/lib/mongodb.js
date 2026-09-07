import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017";

const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
} else {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
}

export function getClientPromise() {
  return clientPromise;
}