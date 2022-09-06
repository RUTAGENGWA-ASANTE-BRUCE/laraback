import {Schema,model,models} from 'mongoose'
const referral_transaction_schema =new Schema({
    "Sales Id":String,
    "User":String,
    "Shooper":String,
    "Store":String,
    "Referral Amount":Number,
    "Currency":String,
    "Status":String,

},
{timestamps:true})

const referral_transaction=models.referral_transactions || model('referral_transactions',referral_transaction_schema)

export default referral_transaction;