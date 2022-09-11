import {Schema,model,models} from 'mongoose'
const click_log_schema =new Schema({
    "Store":{type:String,default:""},
    "User":{type:String,default:""},
    "Cashback Enabled":{type:String,default:""},
    "Cashback Percent":{type:String,default:""},
    "Referral Percent":{type:String,default:""},
    "User Cashback Id":{type:String,default:""},
    "Ip Address":{type:String,default:""},
    "Http Referrer":{type:String,default:""},
},
{timestamps:true})

const click_log=models.click_logs || model('click_logs',click_log_schema)

export default click_log;