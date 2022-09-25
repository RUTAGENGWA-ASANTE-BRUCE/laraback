import {Schema,model,models} from 'mongoose'
const postback_log_schema =new Schema({
    "Network":{type:String,default:null},
    "Network Campaign":{type:String,default:null},
    "Sales Date":{type:String,default:null},
    "Base Commission":{type:String,default:null},
    "Currency":{type:String,default:null},
    "Sale Status":{type:String,default:null},
    "Aff Sub1":{type:String,default:null},
},
{timestamps:true})

const postback_log=models.postback_logs || model('postback_logs',postback_log_schema)

export default postback_log;