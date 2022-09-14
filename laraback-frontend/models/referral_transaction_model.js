import {Schema,model,models} from 'mongoose'
const referral_transaction_schema =new Schema({
    "Sales Id":{type:String,default:null},
    "User":{type:String,default:null},
    "Shooper":{type:String,default:null},
    "Store":{type:String,default:null},
    "Referral Amount":{type:Number,default:0},
    "Currency":{type:String,default:null},
    "Status":{type:String,default:null},

},
{timestamps:true})

const referral_transaction=models.referral_transactions || model('referral_transactions',referral_transaction_schema)

export default referral_transaction;