import {Schema,model,models} from 'mongoose'
const cashback_transaction_schema =new Schema({
    "user":{type:String,default:""},
    "Network":{type:String,default:""},
    "Store":{type:String,default:""},
    "Cashback":{type:String,default:""},
    "Currency":{type:String,default:""},
    "Status":{type:String,default:""},
    "Lock Cashback Status":{type:String,default:""},
    "Lock Cashback Amount":{type:Number,default:0},

},
{timestamps:true})

const cashback_transaction=models.cashback_transactions || model('cashback_transactions',cashback_transaction_schema)

export default cashback_transaction;