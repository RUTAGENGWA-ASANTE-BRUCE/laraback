import {Schema,model,models} from 'mongoose'
const cashback_transaction_schema =new Schema({
    "user":String,
    "Network":String,
    "Store":String,
    "Cashback":String,
    "Currency":String,
    "Status":String,
    "Lock Cashback Status":String,
    "Lock Cashback Amount":Number,

},
{timestamps:true})

const cashback_transaction=models.cashback_transactions || model('cashback_transactions',cashback_transaction_schema)

export default cashback_transaction;