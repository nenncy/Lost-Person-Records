const mongoose = require('mongoose');
const url = process.env.DATABASE;

const connect = mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("Connected correctly to server");
}).catch((err) =>  console.log(err));