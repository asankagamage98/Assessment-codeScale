const { default: mongoose } = require("mongoose")

const MONGODB_URL = process.env.MONGODB_URL;
const dbConnect = async () => {
    try{
        await mongoose.connect(MONGODB_URL);
        console.log("Connected MongoDB successfully..!");
        
    }
    catch(error){
            console.log('MongoDB not connected successfully..: ', error);
    }
}

module.exports = {
    dbConnect
}