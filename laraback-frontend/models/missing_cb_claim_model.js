import {Schema,model,models} from 'mongoose'
const missing_cb_claim_schema =new Schema({
    "User":{type:String,default:null},
    "Click Id":{type:String,default:null},
    "Store":{type:String,default:null},
    "Click Time":{type:Number,default:0},
    "Order Amount":{type:Number,default:0},
    "Status":{type:String,default:null},
    "Closed By":{type:String,default:null},
    "Updated At":{type:String,default:null},
    "Platform":{type:String,default:null},
    "Transaction Date ":{type:String,default:null},
    "Order Id":{type:String,default:null},
    "Currency":{type:String,default:null},
    "User Message":{type:String,default:null},
    "Admin Note":{type:String,default:null}
},
{timestamps:true})

const missing_cb_claim=models.missing_cb_claims || model('missing_cb_claims',missing_cb_claim_schema)

export default missing_cb_claim;