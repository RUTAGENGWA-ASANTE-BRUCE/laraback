import {Schema,model,models} from 'mongoose'
const click_log_schema =new Schema({
    "Store":{type:String,default:null},
    "User":{type:String,default:null},
    "Cashback Enabled":{type:String,default:null},
    "Cashback Percent":{type:String,default:null},
    "Referral Percent":{type:String,default:null},
    "User Cashback Id":{type:String,default:null},
    "Ip Address":{type:String,default:null},
    "Http Referrer":{type:String,default:null},
},
{timestamps:true})

const click_log=models.click_logs || model('click_logs',click_log_schema)

export default click_log;