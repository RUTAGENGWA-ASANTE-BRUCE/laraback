import {Schema,model,models} from 'mongoose'
const sales_transaction_schema =new Schema({
    "Network":String,
  "Network Campaign Id":String,
  "Sale Date":String,
  "Commission Amount":Number,
  "Currency":String,
  "Status":String,
  "Aff1 Sub1":String,

},
{timestamps:true})

const sales_transaction=models.sales_transactions || model('sales_transactions',sales_transaction_schema)

export default sales_transaction;