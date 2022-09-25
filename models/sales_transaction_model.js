import {Schema,model,models} from 'mongoose'
const sales_transaction_schema =new Schema({
    "Network":{type:String,default:null},
  "Network Campaign Id":{type:String,default:null},
  "Sale Date":{type:String,default:null},
  "Commission Amount":{type:Number,default:0},
  "Currency":{type:String,default:null},
  "Status":{type:String,default:null},
  "Aff1 Sub1":{type:String,default:null},

},
{timestamps:true})

const sales_transaction=models.sales_transactions || model('sales_transactions',sales_transaction_schema)

export default sales_transaction;