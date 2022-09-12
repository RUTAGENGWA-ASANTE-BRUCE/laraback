import mongoose from 'mongoose';

const connectionParams={
    useNewUrlParser:true,
    useUnifiedTopology:true,
    autoIndex:true,
}
const database="laraback2"
const password="laraback1234"
const uri=`mongodb+srv://larabac1234:${password}@cluster0.y3n1yuj.mongodb.net/${database}?retryWrites=true&w=majority`

const connectMongo=async ()=>mongoose.connect(uri,connectionParams).then(()=>console.log('connected to cloud atlas')).catch(err=>console.log(err))

export default connectMongo;