const mongoose = require('mongoose')


const connectDb = async() =>{

    try{
        await mongoose.connect('mongodb+srv://thebusinessid:tuba12345@cluster0.s7dkvpz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('MongoDb Connected')
        
    }catch(error){
        console.error('Error connecting to MongoDB:', error.message);
    }
}

module.exports = connectDb