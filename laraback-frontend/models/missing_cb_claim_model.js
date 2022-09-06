import {Schema,model,models} from 'mongoose'
const missing_cb_claim_schema =new Schema({
    "User":String,
    "Click Id":String,
    "Store":String,
    "Click Time":Number,
    "Order Amount":Number,
    "Status":String,
    "Closed By":String,
    "Updated At":String,
    "Platform":String,
    "Transaction Date ":String,
    "Order Id":String,
    "Currency":String,
    "User Message":String,
    "Admin Note":String
},
{timestamps:true})

const missing_cb_claim=models.missing_cb_claims || model('missing_cb_claims',missing_cb_claim_schema)

export default missing_cb_claim;