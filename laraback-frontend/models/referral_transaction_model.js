import {Schema,model,models} from 'mongoose'
const referral_transaction_schema =new Schema({
    "Sales Id":{type:String,default:""},
    "User":{type:String,default:""},
    "Shooper":{type:String,default:""},
    "Store":{type:String,default:""},
    "Referral Amount":{type:Number,default:0},
    "Currency":{type:String,default:""},
    "Status":{type:String,default:""},

},
{timestamps:true})

const referral_transaction=models.referral_transactions || model('referral_transactions',referral_transaction_schema)

export default referral_transaction;