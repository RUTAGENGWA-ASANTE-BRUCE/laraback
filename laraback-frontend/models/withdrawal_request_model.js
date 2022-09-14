import {Schema,model,models} from 'mongoose'
const withdrawal_request_schema =new Schema({
    "Payment Id":{type:String,default:null},
  "User":{type:String,default:null},
  "Method Code":{type:String,default:null},
  "Account":{type:String,default:null},
  "Amount":{type:Number,default:0},
  "Status":{type:String,default:null},
  "Note":{type:String,default:null},
},
{timestamps:true})

const withdrawal_request=models.withdrawal_requests || model('withdrawal_requests',withdrawal_request_schema)

export default withdrawal_request;