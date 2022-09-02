const express = require("express");
const connectDB = require("./config/connectDB");
const user = require("./model/user");
const app = express();
const port = 5000;

connectDB();

app.listen(port,console.log('app is runnig '))

//Create and Save a Record of a Model:
const add = async () => {
  try {
    const nuser = new user ({
      name: "nawres",
      age: 24,
      favoritefood: ["pizza", ],
    });
    await nuser.save();
    console.log(nuser);
  } catch (error) {
    console.log(error);
  }
};
// Create Many Records with .create()
const users = async () => {
  try {
    const manyPerson = await user.create([
      {
        name: "nouhe",
        age: 22,
        favoritefood: ["soup"]
      },
      {
        name: "nabil",
        age: 45,
        favoriteFoods: ["pasta"],
      },
    ]);
  } catch (error) {
    console.log(error);
  }
};
//  Use model.find() to Search Your Database:
const Search = async(name)=>{
  const people= await user.find({name: name})
  console.log( people)
}


// Use model.findOne() to Return a Single Matching Document from Your Database:
var Searchfood = async (food)=> {
  user.findOne({favoritefood: food} , function(err,data){
    if (err) {
      return (err);
  }
  return (data);
  });
}
//Use model.findById() to Search Your Database By _id
var Searchid = async (Id) => {
  user.findById({_id : Id}, function(err,data){ 
    if (err) {
       return (err);
    }
    return  (data)
  });
}
//Perform Classic Updates by Running Find, Edit, then Save 
const FES= async (Id, foodToAdd)=>{
  user.findById({_id: Id}, (err, data)=>{
      if(err){ console.log(err)}
      data.favoritefood.push(foodToAdd)
      data.save((error, newData)=>{
          err?("error ", error)
          :console.log(newData)
      })
  })
  }
// Perform New Updates on a Document Using model.findOneAndUpdate():
const findAndUpdate = (name, newage)=> {
  user.findOneAndUpdate({name}, { $set: { age: newage} }, {new:true}, (err, data)=>{
if(err){console.log(err)}
console.log(data)
  })
}
// Delete One Document Using model.findByIdAndRemove:
const findRemoveById= (Id)=>{
  Person.findByIdAndRemove({_id: Id}, {new: true}, (err, data)=>{
      if(err){ console.log(err)}
      console.log(data)
  })
} 

// MongoDB and Mongoose - Delete Many Documents with model.remove():
const removeManyPerson=(Name)=>{
  user.remove({name: Name}, (err, data)=>{
      err? console.log(err): console.log(data)
  })
  } 

// Chain Search Query Helpers to Narrow Search Results:
var queryChain = (foodToSearch )=>{
  user.find({ favoritefood: foodToSearch})
  .sort({ name: 1 })
  .limit(2)
  .select({ age: 0 })
  .exec((error, data)=> {
      error?
  console.log(error):
  console.log(data)
  });
  };
