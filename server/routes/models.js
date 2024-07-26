import express from "express";
import db from "../db/conn.js";
import { ObjectId } from "mongodb";


const router = express.Router();

router.get("/Friends", async (req, res) => {
  let conn = await db.conn("FriendList");
  let results = await conn.find({})
     .limits(50)
     .toArray();
  res.send(results).status(200);
});

// -----EXAMPLE-----------
router.get("/Friends", async (req, res) => {
try {
    let conn = await db;
    let results = await conn.collection("FriendList").find({})
    .limit(50)
    .toArray();
    res.status(200).send(results);
  } catch (error) {
    console.error("Error fetching friends:", error);
    res.status(500).send("Internal Server Error");
  }
});


// --------------

router.get("/User", async (req, res) => {
 let models = await db.conn("ModelUser");
 let results = await conn.aggregate([
     {"$name": {"name":1}},
     {"$password": {"password":2}},
     {"$email": 3}
]).toArray();
res.send(results).status(200);
});

router.get("/User", async (req,res) =>{
 let conn = await db.conn("ModelUser");
 let query = {_id: ObjectId(req.params.id)};
 let result = await conn.findOne(query);

if (!result) res.send("not found").status(404);
else res.send(result).status(200);
});

router.post("/Groups", async (req, res) => {
let conn = await db.conn("GroupModel");
let newDocument = req.body;
newDocument.date = new Date();
let result = await conn.insertOne(newDocument);
res.send(result).status(204)
})

router.patch("/howarefeeling", async (req, res) => {
const query = { _id: ObjectId(req.params.id) };
const update = {
   $push: {  comments: req.body }
 };

 let conn = await db.conn("FeelingModel");
 let result = await conn.updateOne(query, update);

 res.send(result).status(200);
})

router.delete("/leaveGroup", async (req, res) => {
 const query = { _id: ObjectId(req.params.id) };
 
 const conn = db.conn("GroupModel");
 let result = await conn.deleteOne(query);

 res.send(result).status(200);
});
export default router;