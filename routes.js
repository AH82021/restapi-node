const express = require('express');

const router = express.Router();

const User = require('./model.js');

router.post('/users',async (req,res)=>{
  console.log(req.body);
  
  const {name,email,password} = req.body;

   try{
const user = new User({name,email,password});
  await user.save();
   res.send(user);
   } catch(err){
log.error(err);
res.status(500).send('Error while saving the user');
   }
});




// list all the users from the database
router.get('/users',async (req,res)=>{

try {
   const users = await User.find();
   res.send(users);
} catch (error) {
   console.log(error);
   res.status(500).send(error);
   
}

})


router.get('/users/:id',async (req,res)=>{
    const id = req.params.id;
    console.log(id);
    
   try {
    const user =  await User.findById(id)
    res.send(user);
   } catch (error) {
      console.log(error);
      res.status(500).send(error);
   }
})


router.put('/users/:id',async (req,res)=>{
   const {id} = req.params;
   // const name = req.body.name;
   // const email = req.body.email;
   // const password = req.body.password;
const {name,email,password} = req.body;

try {
    const user = await User.findByIdAndUpdate(id,{name,email,password},{new:true});
      res.send(user);
} catch (error) {
   console.log(error);
      res.status(500).send(error);
}
 
})


router.delete('/users/:id',async (req,res)=>{
   const {id} = req.params;
   try {
      const user = await User.findByIdAndDelete(id);
      res.send(user);
   } catch (error) {
      console.log(error);
      res.status(500).send(error);
   }
})


module.exports = router;