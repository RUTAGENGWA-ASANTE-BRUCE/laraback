const Mongoose=require('mongoose')
require('dotenv').config();

const connectionParams={
    useNewUrlParser:true,
    useUnifiedTopology:true,
    autoIndex:true,
}
const uri=`mongodb+srv://larabac1234:laraback1234@cluster0.y3n1yuj.mongodb.net/?retryWrites=true&w=majority`
const connection=Mongoose.connect(uri,connectionParams).then(()=>console.log('connected to cloud atlas')).catch(err=>console.log(err))

module.exports=connection