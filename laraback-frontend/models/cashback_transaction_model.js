import {Schema,model,models} from 'mongoose'
const cashback_transaction_schema =new Schema({
    "user":{type:String,default:null},
    "Network":{type:String,default:null},
    "Store":{type:String,default:null},
    "Cashback":{type:String,default:null},
    "Currency":{type:String,default:null},
    "Status":{type:String,default:null},
    "Lock Cashback Status":{type:String,default:null},
    "Lock Cashback Amount":{type:Number,default:0},

},
{timestamps:true})

const cashback_transaction=models.cashback_transactions || model('cashback_transactions',cashback_transaction_schema)

export default cashback_transaction;