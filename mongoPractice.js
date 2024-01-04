const { MongoClient } = require("mongodb");
url = "mongodb://localhost:27017/";

const client = new MongoClient(url);

const connection = async () => {
  try {
    await client.connect();
    console.log("connected!");
    // await createCollection();
    await retrieveData();
  } catch (err) {
    console.log(err);
  } finally {
    try {
      await client.close();
      console.log("Connection is securely closed!");
    } catch (err) {
      console.log("Error while closing the connection: ", err);
    }
  }
};
connection().catch(console.error);

//Insert data in the database

// const createCollection = async () => {
//   var dbo = client.db("mydb"); // redirect to the premade database
//   try {
//     var objItem = { name: "Adarsh", age: 21 };
//     var objItemList = [
//       { name: "Gaurav", age: 23 },
//       { name: "Soumya", age: 22 },
//     ];

//     var result =  await dbo.collection("persons").insertMany(objItemList);
//     console.log(`${result.insertedCount} Document inserted `)
//   } catch (err) {
//     console.error(err);
//   }
// };


//Retrieve data from the database

const retrieveData = async () => {
    await client.connect();
    var retData = client.db('mydb');

    try {
        let result = await retData.collection('persons').find({}).toArray()
        console.log(result);
        console.log('Data retrieved!');
    } catch (err) {
        console.error('data cannot be retrieved: ', err);
    }

}