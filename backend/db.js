const mongoose = require('mongoose');
const mongodb = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/FoodApp', { useNewUrlParser: true }, async (err, result) => {
        if (err) console.log("i'm fucked", err)
        else {
            console.log("connected succesfully")
            const fetched_data = await mongoose.connection.db.collection("mern")
            fetched_data.find({}).toArray(async function (err, data) {
                const foodcategory = await mongoose.connection.db.collection("food_category")
                foodcategory.find({}).toArray(function (err, catData){
                if (err) console.log("i'm screwd", err)
                else {
                    global.mern = data;
                    global.food_category = catData;
                }
            })
                    // if(err)console.log("i'm screwd",err)
                    // else{ 
                    //     global.mern = data;
                    //     console.log()
                    // }
                })
        }
    });
}

module.exports = mongodb;