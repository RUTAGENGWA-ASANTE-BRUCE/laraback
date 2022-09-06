import {Schema,model,models} from 'mongoose'
const withdrawal_request_schema =new Schema({
    "Payment Id":String,
  "User":String,
  "Method Code":String,
  "Account":String,
  "Amount":Number,
  "Status":String,
  "Note":String,
},
{timestamps:true})

const withdrawal_request=models.withdrawal_requests || model('withdrawal_requests',withdrawal_request_schema)

export default withdrawal_request;