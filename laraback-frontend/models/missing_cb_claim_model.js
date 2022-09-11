import {Schema,model,models} from 'mongoose'
const missing_cb_claim_schema =new Schema({
    "User":{type:String,default:""},
    "Click Id":{type:String,default:""},
    "Store":{type:String,default:""},
    "Click Time":{type:Number,default:0},
    "Order Amount":{type:Number,default:0},
    "Status":{type:String,default:""},
    "Closed By":{type:String,default:""},
    "Updated At":{type:String,default:""},
    "Platform":{type:String,default:""},
    "Transaction Date ":{type:String,default:""},
    "Order Id":{type:String,default:""},
    "Currency":{type:String,default:""},
    "User Message":{type:String,default:""},
    "Admin Note":{type:String,default:""}
},
{timestamps:true})

const missing_cb_claim=models.missing_cb_claims || model('missing_cb_claims',missing_cb_claim_schema)

export default missing_cb_claim;