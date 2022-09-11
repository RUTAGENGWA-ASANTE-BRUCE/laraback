import {Schema,model,models} from 'mongoose'
const currency_master_schema =new Schema({
    "Name":{type:String,default:""},
  "Iso Code":{type:String,default:""},
  "Symbol":{type:String,default:""},
  "Conversion Rate":{type:String,default:""},
  "Enabled":{type:String,default:""},
  "Is Primary":{type:String,default:""},
  "Dispal As":{type:String,default:""},
},
{timestamps:true})

const currency_master=models.currency_masters || model('currency_masters',currency_master_schema)

export default currency_master;