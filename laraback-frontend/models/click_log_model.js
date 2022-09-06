import {Schema,model,models} from 'mongoose'
const click_log_schema =new Schema({
    "Click Id":String,
    "Click Code":String,
    "Click Time":String,
    "Store":String,
    "User":String,
    "Cashback Enabled":String,
    "Cashback Percent":String,
    "Referral Percent":String,
    "Can Claim":String,
    "User Cashback Id":String,
    "Source Type":String,
    "Source Id":String,
    "Ip Address":String,
    "Http Referrer":String,
},
{timestamps:true})

const click_log=models.click_logs || model('click_logs',click_log_schema)

export default click_log;