import {Schema,model,models} from 'mongoose'
const sales_transaction_schema =new Schema({
    "Network":{type:String,default:""},
  "Network Campaign Id":{type:String,default:""},
  "Sale Date":{type:String,default:""},
  "Commission Amount":{type:Number,default:0},
  "Currency":{type:String,default:""},
  "Status":{type:String,default:""},
  "Aff1 Sub1":{type:String,default:""},

},
{timestamps:true})

const sales_transaction=models.sales_transactions || model('sales_transactions',sales_transaction_schema)

export default sales_transaction;