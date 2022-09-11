import {Schema,model,models} from 'mongoose'
const postback_log_schema =new Schema({
    "Network":{type:String,default:""},
    "Network Campaign":{type:String,default:""},
    "Sales Date":{type:String,default:""},
    "Base Commission":{type:String,default:""},
    "Currency":{type:String,default:""},
    "Sale Status":{type:String,default:""},
    "Aff Sub1":{type:String,default:""},
},
{timestamps:true})

const postback_log=models.postback_logs || model('postback_logs',postback_log_schema)

export default postback_log;