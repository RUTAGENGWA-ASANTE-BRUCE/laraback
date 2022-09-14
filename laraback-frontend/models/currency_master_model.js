import {Schema,model,models} from 'mongoose'
const currency_master_schema =new Schema({
    "Name":{type:String,default:null},
  "Iso Code":{type:String,default:null},
  "Symbol":{type:String,default:null},
  "Conversion Rate":{type:String,default:null},
  "Enabled":{type:String,default:null},
  "Is Primary":{type:String,default:null},
  "Dispal As":{type:String,default:null},
},
{timestamps:true})

const currency_master=models.currency_masters || model('currency_masters',currency_master_schema)

export default currency_master;