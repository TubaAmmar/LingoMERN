const express = require('express')
const app = express();
const PORT = 5000;
const connectDb = require('./DB/db')
const User = require('./modal/userSchema')
const cors = require('cors')

app.use(express.json())
app.use(cors(
    {
    origin:['http://localhost:3000'],
    methods:['POST','GET'],
    credentials: true
}
connectDb()

app.post('/getData', async(req, res)=>{
   try{
      const user = req.body;
      const newUser = await new User(user)
      if(!newUser){
        res.status(401).json({msg:'User not found'})
      }

       await newUser.save()
       res.status(201).json({msg:'User Created'});

   }catch(error){
    res.status(500).json({error:error})
   }
})

app.get('/allData', async (req, res) => {
    try {
        const result = await User.find({});
        res.json(result);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.delete('/del/:id', async(req, res) => {
    try{
        const id = req.params.id;
        const userExist = await User.findById(id)
        if(!userExist){
         res.status(404).json({msg:'User not Found'})
        }

        const deleteData = await User.findByIdAndDelete(id)
        res.status(201).json({msg:'User Deleted'})


     }catch(error){
         res.status(500).json({msg:'User deleted'})
     }
})

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})
