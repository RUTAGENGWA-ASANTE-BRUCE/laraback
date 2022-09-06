import {Schema,model,models} from 'mongoose'
const postback_log_schema =new Schema({
    "Network":String,
    "Network Campaign":String,
    "Sales Date":String,
    "Base Commission":String,
    "Currency":String,
    "Sale Status":String,
    "Aff Sub1":String,
},
{timestamps:true})

const postback_log=models.postback_logs || model('postback_logs',postback_log_schema)

export default postback_log;