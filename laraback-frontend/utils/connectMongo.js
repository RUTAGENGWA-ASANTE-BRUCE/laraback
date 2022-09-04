import mongoose from 'mongoose';

const connectionParams={
    useNewUrlParser:true,
    useUnifiedTopology:true,
    autoIndex:true,
}
const database=""
const password="laraback1234"
const uri=`mongodb+srv://larabac1234:laraback1234@cluster0.y3n1yuj.mongodb.net/?retryWrites=true&w=majority`

const connectMongo=async ()=>mongoose.connect(uri,connectionParams).then(()=>console.log('connected to cloud atlas')).catch(err=>console.log(err))

export default connectMongo;