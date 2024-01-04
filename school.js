const { MongoClient } = require("mongodb");
var url = "mongodb://localhost:27017/";

const client = new MongoClient(url);

const connection = async () => {
  try {
    await client.connect();
    console.log("Connected!");
    // await createCollection();
    await retData();
  } catch (error) {
    console.log(error);
  } finally {
    try {
      await client.close();
      console.log("Connection closed!");
    } catch (error) {
      console.error("Error while closing the connection: ", error);
    }
  }
};
connection().catch(console.error);

// const createCollection = async () => {
//   var student = client.db("school");

//   try {
//     var studentDetails = [
//       { id: 101, name: "Adarsh ", age: 21, CGPA: 8.3 },
//       { id: 102, name: "Aman ", age: 22, CGPA: 8.4 },
//       { id: 103, name: "Abhi", age: 23, CGPA: 8.5 },
//     ];

//     let result = await student.collection('Student_info').insertMany(studentDetails);
//     console.log(`${result.insertedCount} Document inserted!`);
//   } catch (err) {
//     console.error(err);
//   }
// };

const retData = async () => {
    var dataBase = client.db('school')

    try {
        let result = await dataBase.collection('Student_info').find({age:22},{projection:{_id:0, id:0}}).toArray()
        console.log(result);

    } catch (err) {
        console.error(err)
    }
}