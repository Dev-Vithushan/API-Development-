const mongoose = require('mongoose');


connectToDB = async () => mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true            //need to add these things because when on the develop side it will update it 
});

module.exports = connectToDB;
