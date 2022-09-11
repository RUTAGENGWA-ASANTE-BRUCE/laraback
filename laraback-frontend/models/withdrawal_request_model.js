import {Schema,model,models} from 'mongoose'
const withdrawal_request_schema =new Schema({
    "Payment Id":{type:String,default:""},
  "User":{type:String,default:""},
  "Method Code":{type:String,default:""},
  "Account":{type:String,default:""},
  "Amount":{type:Number,default:0},
  "Status":{type:String,default:""},
  "Note":{type:String,default:""},
},
{timestamps:true})

const withdrawal_request=models.withdrawal_requests || model('withdrawal_requests',withdrawal_request_schema)

export default withdrawal_request;