import {Schema,model,models} from 'mongoose'
const currency_master_schema =new Schema({
    "Name":String,
  "Iso Code":String,
  "Symbol":String,
  "Conversion Rate":String,
  "Enabled":String,
  "Is Primary":String,
  "Dispal As":String,
},
{timestamps:true})

const currency_master=models.currency_masters || model('currency_masters',currency_master_schema)

export default currency_master;